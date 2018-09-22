<template>
    <form @submit.prevent="onSave">
                <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
                <AppControlInput v-model="editedPost.title">Title</AppControlInput>
                <!-- <AppControlInput v-model="editedPost.thumbnail" >Thumbnail Link</AppControlInput> -->
                {{thumbnail}} + thumb
                {{editedPost.images[0].name}}
                <input
                    id="thumbnail-file"
                    v-show = "editedPost.images[0].name == ''"
                    type="file"
                    v-bind="$attrs"
                    @change = "onFileSelected"
                    @isThumb = "thumbnail = true"

                    >
                <AppButton :disabled="disabled" @click.prevent="onUpload(0)" >Upload</AppButton>
                <AppButton @click.prevent="onRemove(0)" @isThumb = "thumbnail = true" style="margin-left: 10px">Remove</AppButton> 
                <br>
                <br>
                <h1>Images</h1>
                <div v-for="(img, index) in editedPost.images" v-if="index >= 1" :key ="index">
                  {{img.name}}
 
                  <input  type="file" v-bind="$attrs"
                    @isThumb = "thumbnail = true"
                    @change = "onFileSelected" 
                    v-show = "img.name == ''">
                  <AppButton :disabled="disabled" @click.prevent="onUpload(index)" >Upload</AppButton>
                  <AppButton @click.prevent="onRemove(index)" @isThumb = "thumbnail = true"  style="margin-left: 10px">Remove</AppButton> 
                  <br>
                  <br>
                </div>

                <AppButton @click.prevent="onAddNew" >Add new Image</AppButton>           
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
        fileName: '',
        thumbnail: null,
        selectedFile: '',
        editedPost: this.post ? { ...this.post
        } : {
          author: "Tiffany Marroquin",
          title: "",
          content: "",
          previewText: "",
          images: [{
            name: '',
            link: '',
            path: '',
            id: ''
          }]
        }
      }
    },
    methods: {
      isThumbnail(ans) {
        console.log(this.thumbnail + ' is func')

        this.thumbnail = ans


      },
      addTo(id, name, path, index) {
        console.log(this.thumbnail + 'thumb')
        console.log('add')
        dbx.sharingCreateSharedLink({
            path: path,
            short_url: false
          })
          .then((data) => {
            let link = ''
            link = data.url.replace("?dl=0", "?raw=1")
            // this.editedPost.images.push({id: id, name: name, path: path, link: link})
            if (index) {
              console.log('pass link')
              this.editedPost.images[0].name = name
              this.editedPost.images[0].path = path
              this.editedPost.images[0].link = link
              this.editedPost.images[0].id = id

            } else {
              this.editedPost.images[index].id = id
              this.editedPost.images[index].name = name
              this.editedPost.images[index].link = link
              this.editedPost.images[index].path = path
            }


          })
          .catch((err) => {
            console.log(err)
          })
        console.log(this.editedPost.images)
      },
      onFileSelected(event) {
        this.selectedFile = event.target.files[0];
        this.fileName = this.selectedFile.name;
      },
      onUpload(index) {
        if (this.selectedFile != null) {
          this.editedPost.thumbnail = ""
          dbx.filesUpload({
              contents: this.selectedFile,
              path: '/' + this.fileName,
              autorename: true
            })
            .then((data) => {
              this.addTo(data.id, data.name, data.path_display, index)
            })
            .catch(err => {
              console.error(err);
            });
        }
      },
      onRemove(index) {
        // console.log(this.thumbnail + " thumb")
        // console.log(this.selectedFile + "file")
        if (index === 0) {
          console.log(index + ' in')
          this.selectedFile = ''
          this.editedPost.images[0].name = ''
          this.editedPost.images[0].path = ''
          this.editedPost.images[0].link = ''
          this.editedPost.images[0].id = ''

        } else {
          console.log('removed splice')
          console.log(index)
          console.log(this.editedPost.images.length)
          if (this.editedPost.images.length > 2 || index > 0) {
            this.editedPost.images.splice(index, 1);
          }
        }



        console.log(this.editedPost.images)
      },
      onAddNew() {
        this.editedPost.images.push({
          name: '',
          id: '',
          link: '',
          path: ''
        })

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
