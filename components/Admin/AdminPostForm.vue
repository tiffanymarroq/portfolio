<template>
    <form @submit.prevent="onSave">
                <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
                <AppControlInput v-model="editedPost.title">Title</AppControlInput>
                <AppControlInput v-model="editedPost.thumbnail" >Thumbnail Link</AppControlInput>
                <!-- <AppControlInput control-type="image" v-model="selectedFile" @change="onFileSelected">Thumbnail</AppControlInput> -->
                <h1>{{fileName}} + name</h1>
                <button @click.prevent="getImage">Get</button>
                {{img}}     
                <!-- <p v-for="i in editedPost.images">{{i}}</p> -->

                <input
                    type="file"
                    v-bind="$attrs"
                    @change = "onFileSelected"
                    >
                
                
                <button @click.prevent="onUpload">Add</button>
                <button @click.prevent="onRemove">Remove</button>           
                
                <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
                <AppControlInput control-type="textarea" v-model="editedPost.previewText">Preview Text</AppControlInput>
                <AppButton type="submit">Save</AppButton>
                <AppButton type="button" @click.prevent="deletePost" style="margin-left: 10px">Delete</AppButton>
                <AppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel">Cancel</AppButton>
    </form>
</template>
<script>
  export default {
    props: {
      post: {
        type: Object,
        required: false
      }
    },
    data() {
      return {
        selectedFile: null,
        fileName: '',
        fileContents: null,
        img: null,
        editedPost: this.post ?
          { ...this.post
          } :
          {
            author: "",
            title: "",
            thumbnail: "",
            content: "",
            previewText: "",
            images: []
          }
      }
    },
    methods: {
      onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
        console.log(this.fileName = this.selectedFile.name);
        console.log(this.editedPost.images)
        // this.editedPost.images.push(this.fileName);
      },
      onUpload() {
        const formData = new FormData()
        formData.append('myFile', this.selectedFile, this.selectedFile.name);
        if (formData != null) {
          console.log(this.selectedFile)
          this.$store.dispatch('uploadImage', this.selectedFile);
        }
      },
      onRemove() {
        this.selectedFile = null
      },
      onSave() {
        //Save Posts
        this.$emit('submit', this.editedPost)
      },
      deletePost() {
        this.$store.dispatch('deletePost', this.editedPost)
          .then(() => {
            this.$router.push("/admin");
          })
      },
      onCancel() {
        //navigate back
        this.$router.push('/admin');
      },
      getImage(){
        this.img = this.$store.getters.getImage;
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
