<template>
    <form @submit.prevent="onSave">
                <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
                <AppControlInput v-model="editedPost.title">Title</AppControlInput>
                <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
                <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
                <AppControlInput control-type="textarea" v-model="editedPost.previewText">Preview Text</AppControlInput>
                <AppButton type="submit">Save</AppButton>
                <AppButton type="button" @click.prevent="deletePost" style="margin-left: 10px">Delete</AppButton>
                <AppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel">Cancel</AppButton>
    </form>
</template>
<script>


export default {
    props:{
        post: {
            type: Object,
            required: false
        }
    },
    data(){
        return{
            editedPost:this.post 
            ? {...this.post}
            : {
                author: "",
                title: "",
                thumbnail: "",
                content: "",
                previewText: ""
            }
        }
    },
    methods: {
        onSave() {
            //Save Posts
            this.$emit('submit', this.editedPost)
        },
        deletePost(){           
            this.$store.dispatch('deletePost', this.editedPost)
            .then(() => {
                this.$router.push("/admin");
            })
        },
        onCancel(){
            //navigate back
            this.$router.push('/admin');
        }
    },
    
}
</script>
<style scoped>
    form{
        max-width: 600px;
        margin: 0 auto;
        padding: 0 20px;
    }
</style>
