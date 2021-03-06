import Vuex from 'vuex';
import Cookie from 'js-cookie';
var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({ accessToken: process.env.dbAPIKey });

const createStore = () => {
    return new Vuex.Store({
        state:{
            loadedPosts:[],
            token: null,
            id: '',
            length: null
        },
        mutations:{
            setPosts(state, posts) {
                let postPosition = [];
                postPosition.length = posts.length;
                let newArr = posts.map(post=>{
                    if(post.position == 1){
                        postPosition[0] = post
                    }
                    if(post.position == null){
                        postPosition[postPosition.length - 1] = post;
                    }
                    postPosition[post.position - 1] = post;
                    return postPosition;
                })
                state.length = postPosition.length;
                state.loadedPosts = postPosition;
            },
            addPost(state, post){
                state.loadedPosts.push(post)                
            },
            editPost(state, editedPost){
                const postIndex = state.loadedPosts.findIndex(
                    post => post.id === editedPost.id
                );
                state.loadedPosts[postIndex] = editedPost;
                console.log('edit');
            },
            deletePost(state, editedPost){
                const postIndex = state.loadedPosts.findIndex(
                    post => post.id === editedPost.id
                );
                state.loadedPosts.splice(postIndex, 1);  
                console.log('delete');
                            
            },
            setToken(state, token){
                state.token = token;
            },
            clearToken(state){
                state.token = null;
            },
            currentPost(state, id){
                    state.id = null;
                    state.id = id;
                    localStorage.setItem('postID', id);
                    // console.log(state.id + ' store get');
            },
        },
        actions:{
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios.$get( "/posts.json")
                    .then(data => { 
                        const postsArray =[]
                        for(const key in data){
                            postsArray.push({ ...data[key], id:key});
                        }
                        vuexContext.commit('setPosts', postsArray)
                    })
                    .catch( e => context.error(e))
            },
            addPost(vuexContext, post){
                const createdPost =  { 
                    ...post,
                    updatedDate: new Date()
                }
                return this.$axios
                .$post(process.env.databaseURL + '/posts.json?auth=' + vuexContext.state.token, createdPost)
                .then(data => {
                    console.log(process.env.databaseURL + ' add')
                    vuexContext.commit('addPost', {...createdPost, id: data.name})
                    this.$router.push('/admin')
                })
                .catch(e => console.log(e.response));
                
            },
            editPost(vuexContext, editedPost){
                return this.$axios.$put(process.env.databaseURL + '/posts/' +
                editedPost.id +
                '.json?auth=' + vuexContext.state.token, editedPost)
                .then(res => {
                    vuexContext.commit('editPost', editedPost)
                })
                .catch(e => console.log(e.response));
            },
            deletePost(vuexContext, editedPost){
                return this.$axios.$delete(process.env.databaseURL + '/posts/' +
                editedPost.id +
                '.json?auth=' + vuexContext.state.token, editedPost)
                .then(res => {
                    vuexContext.commit('deletePost', editedPost)
                })
                .catch(e => console.log(e.response));
            },
            setPosts(vuexContext, posts){
                vuexContext.commit('setPosts', posts)
            },
            deleteImage(vuexContext,file){
                // dbx.filesDelete({path: '/' + file.name});
                //view image archive
            },
            authenticateUser(vuexContext, authData){
                let authUrl = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
                    process.env.fbAPIKey;
                if (!authData.isLogin) {
                  authUrl = 
                    'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' +
                     process.env.fbAPIKey;
                }
                return this.$axios
                    .$post(authUrl, {
                        email: authData.email,
                        password: authData.password,
                        returnSecureToken: true
                    })
                    .then(result => {
                        vuexContext.commit('setToken', result.idToken);
                        localStorage.setItem('token', result.idToken);
                        localStorage.setItem(
                            'tokenExpiration',
                            new Date().getTime() + Number.parseInt(result.expiresIn)*1000 );
                        Cookie.set('jwt', result.idToken);
                        Cookie.set(
                            'expirationDate',
                            new Date().getTime() + Number.parseInt(result.expiresIn)*1000
                        );
                        return this.$axios.$post('http://localhost:3000/api/track-data', {
                            data: 'Authenticated!'
                        })
                    })
                    .catch(e => {
                        console.log(e.response)
                    });
            },
            setLogoutTimer(vuexContext, duration){
                setTimeout(() => {
                    vuexContext.commit('clearToken');
                }, duration)
            },
            initAuth(vuexContext, req){
                let token;
                let expirationDate;
                if(req){
                    
                    if(!req.headers.cookie){
                        return;
                    }
                    const jwtCookie = req.headers.cookie
                        .split(';')
                        .find( c => c.trim().startsWith('jwt='));
                    if(!jwtCookie){
                        return;
                    }
                     token = jwtCookie.split('=')[1];
                     expirationDate = req.headers.cookie
                        .split(';')
                        .find( c => c.trim().startsWith('expirationDate='))
                        .split('=')[1];
                }else if(process.client ){
                     token = localStorage.getItem('token');
                     expirationDate = localStorage.getItem('tokenExpiration');
                    
                }
                if( new Date().getTime() > +expirationDate || !token){
                    vuexContext.dispatch('logout');
                    console.log('no token')
                    return;
                }; 
                vuexContext.commit('setToken', token);
            },
            logout(vuexContext){
                vuexContext.commit('clearToken');
                Cookie.remove('jwt');
                Cookie.remove('expirationDate');
                if(process.client){
                    localStorage.removeItem('token');
                    localStorage.removeItem('tokenExpiration');
                }
            },
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            },
            getLength(state){
                return state.length;
            },
            isAuthenticated(state){
                return state.token != null;
            },
        }
    })
}

export default createStore