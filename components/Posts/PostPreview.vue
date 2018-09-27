<template>
  <nuxt-link :to="{name: postLink, params:{  postTitle: convertTitle, postID: id }}" class="post-preview">
    <article>
      <!-- <div class="post-content">
        <h1 class="post-title">{{title}}</h1>
        <p>{{previewText}}</p>
      </div> -->
        <div class="ratio">
          <img v-lazy="thumbnail" alt=""  class="ratio__content">
        </div>
      
      <!-- <div class="post-thumbnail" :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div> -->
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
    margin: 10px;
  
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
    width: 500px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 500px;
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
.post-title{
  text-transform: uppercase;
}

.ratio{
  position: relative;
  display: block;

}
.ratio::before{
  content: '';
  display: block;
  width: 100%;
  padding-bottom: 100%;
  background: #333;
}
.ratio__content{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>








