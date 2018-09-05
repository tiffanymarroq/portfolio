<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm
                :post="loadedPost"
                @submit="onSubmitted"
             />
        </section>
    </div>
</template>
<script>
import AdminPostForm from '@/components/admin/AdminPostForm'

export default {
    data(){
        return{
            id: '',
            loadedPost: []
        }
    },
    layout: 'admin',
    middleware: ['check-auth','auth'],    
    components: {
        AdminPostForm
    },
    // asyncData(context){
    //    return context.app.$axios
    //         .$get(
    //             "/posts/" +
    //             context.params.postID +
    //             ".json"
    //         )
    //         .then(data => {
    //             console.log(data + ' adming post')
    //             console.log(context.params.postID + ' adming post')
    //             console.log(context.params.postTitle + ' adming post')
    //             return {
    //                 loadedPost: { ...data, id: context.params.postID }
    //             }
                 
    //         })
    //         .catch( e => context.error());

    // },
    created(){
        this.id = this.$store.getters.currentPost;
        console.log(this.id + ' id post')
        this.$axios.$get(
        '/posts/' +
        this.id +
        '.json')
        .then( data => {
        
        
            this.loadedPost = data;
            this.id = data.id;
        
        })
        .catch( e => console.log(e))
    },
    methods: {
        onSubmitted(editedPost){
            this.$store.dispatch('editPost', editedPost)
            .then(() => {
                this.$router.push('/admin')
            });
        }
    }
};
</script>
