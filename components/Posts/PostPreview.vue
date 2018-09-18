<template>
<nuxt-link :to="{name: postLink, params:{  postTitle: convertTitle, postID: id }}"  class="post-preview">
    <article >
              <h1>{{title}}</h1>
        <p>{{previewText}}</p>
      <div 
        class="post-thumbnail" 
        :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
      <!-- <div class="post-content"> -->

      <!-- </div> -->
    </article>
  </nuxt-link>
</template>
<script>
export default {
    name:'PostPreview',
    props: {
        id: {
            type: String,
            required: true
        },
        isAdmin: {
          type: Boolean,
          required: true
        },
        title: {
            type: String,
            required: true
        },
        previewText: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        }
    },
    computed: {
      postLink() {
        return this.isAdmin ? 'admin-postID' : 'posts-postID';
      },
      convertTitle(){
        return this.title.split(' ').join('-').toLowerCase();
      },
     
      
    },
    methods: {
       setID(id){
        console.log(id + ' set')
        return this.$store.commit('currentPost', id)
      }
    }

}
</script>

<style scoped>
.post-preview {
  /* border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 0 2px 2px #ccc; */
  background-color: white;
  width: 90%;
}
.post-preview:hover{
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
}
a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>








