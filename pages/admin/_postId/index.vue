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
import axios from 'axios'
import AdminPostForm from '@/components/admin/AdminPostForm'

export default {
    layout: 'admin',
    
    components: {
        AdminPostForm
    },
    asyncData(context){
       return axios
            .get(
                "https://blog-86697.firebaseio.com/posts/" +
                context.params.postId +
                ".json"
            )
            .then(res => {
                return {
                    loadedPost: { ...res.data, id: context.params.postId }
                };
            })
            .catch( e => context.error());

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
