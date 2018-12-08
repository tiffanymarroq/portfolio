<template>
    <div class="single-post-page">
        <section class="post " >
          <div class="post-name">
            <h1 class="post-title">{{loadedPost.title}}</h1>
            <!-- <p class="post-tags tags">{{loadedPost.tags}}</p> -->
            <p class="post-content" >{{loadedPost.content}}</p>
            
            <a target="_blank" v-show="loadedPost.url != ''" :href="loadedPost.url">Live Site</a>
          </div>
            

        </section>
        <div class="image-content" v-for="(img,index) in loadedPost.images" v-if="index >= 1" :key="index">
          <img v-lazy="img.link" alt="" style="width: 100%; margin: 20px 0 ">
        </div> 
    </div>
</template>
<script>
export default {
  data(){
    return{
      id: '',
      loadedPost: []
    }
  },
  asyncData(context) { 
    if(context.payload){
      console.log('payload')
      return {
        loadedPost: context.payload.postData

      }
    }
    return context.app.$axios.$get(
      '/posts/' +
      context.params.postID +
      '.json')
    .then( data => {
      return {
        content: data.content,
        loadedPost: data,
        post: data.id
      }
    })
    .catch( e => console.log(e))
  },
  methods: {
    getContent(){
      return (this.loadedPost.context)
    }
  },

  head: {
    title: 'blog'
  }
}

</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
  /* max-width: 1200px; */
  margin: 0 auto;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto; 
  }
}
.post-name{
  text-align: center;
}
.post-title {
  margin-top: 60px;
  margin-bottom: 40px;
  text-transform: capitalize;
  font-size: 40px;
}
.post-tags{
  /* color: #777; */
  text-transform: capitalize;
  font-size: .8rem;
}
.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}
  .post-name,.post-content{
    width: 100% ;
  }
.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
.post-content{
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.6;
  
}
.image-content{
  margin-top: 30px;
}
</style>

