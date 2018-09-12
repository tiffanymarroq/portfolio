<template>
    <form @submit.prevent="onSave">
                <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
                <AppControlInput v-model="editedPost.title">Title</AppControlInput>
                <AppControlInput v-model="editedPost.thumbnail" >Thumbnail Link</AppControlInput>
                <!-- <AppControlInput control-type="image" v-model="selectedFile" @change="onFileSelected">Thumbnail</AppControlInput> -->
                <h1>{{fileName}} + name</h1>
        
                <input
                    type="file"
                    v-bind="$attrs"
                    @change = "onFileSelected"
                    >
                <button :disabled="disabled" @click.prevent="onUpload">Add</button>
                <button @click.prevent="onRemove">Remove</button>           
                
                <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
                <AppControlInput control-type="textarea" v-model="editedPost.previewText">Preview Text</AppControlInput>
                <AppButton type="submit">Save</AppButton>
                <AppButton type="button" @click.prevent="deletePost" style="margin-left: 10px">Delete</AppButton>
                <AppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel">Cancel</AppButton>
    </form>
</template>
<script>
import dbx from '~/modules/dbx.js'

  export default {
    props: {
      post: {
        type: Object,
        required: false
      }
    },
    data() {
      return {
        disabled: false,
        selectedFile: null,
        fileName: '',
        fileContents: null,
        img: null,
        images: [],
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
      addTo(id, path, name){
        this.images.push({id: id, path: path, name: name})
        console.log(this.images)
      },
      onFileSelected(event) {
        console.log(event.target.files)
        this.selectedFile = event.target.files[0];
        this.fileName = this.selectedFile.name;        
      },
      onUpload() {
        if (this.selectedFile != null) {
          dbx.filesUpload({contents: this.selectedFile, path: '/' + this.fileName, autorename: true})
          .then((data) => {
            console.log(data)
            let id = data.id;
            let path = data.path_display;
            let name = data.name
          })
          .catch(err => {
            console.error(err);
          });
          this.disabled = true;
        }
      },
      onRemove() {
        this.selectedFile = null
        this.disabled = false;        
        dbx.filesListFolder({path: ''})
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });

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
