<template>
  <nuxt-link :to="{name: postLink, params:{  postTitle: convertTitle, postID: id }}" class="post-preview" :class="{adminPost: isAdmin}">
    <article>
      <div class="ratio">
        <img v-lazy="thumbnail" alt="" class="ratio__content">
        <div class="post-text">
          <h1  v-if="isAdmin">{{title}}</h1>
          <h1 class="post-title" v-else>{{title}}</h1>
        </div>

      </div>
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
        },
        dateCompleted: {
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
  background-color: white;
  width: 100%;
  /* margin-bottom: 50px; */
  cursor: pointer;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  color: black;
}

.adminPost {
  max-width: 300px ! important;
  max-height: 200px;
  margin: 10px 0;
  margin-left: auto;
  margin-right: auto;
}

.adminPost .post-text {
  text-transform: uppercase;
  transform: translateY(0px);
}

.adminPost.ratio {
  max-height: 200px;
}

@media (min-width: 850px) {
  .adminPost {
    margin: 10px;
  }
  .post-preview {
    width: calc(50% - 20px);
    margin-bottom: 0px;
    
  }
  .post-completed {
    float: right !important;
  }
  .post-title{
    font-size: 16px;
  }
}

.post-heading {
  display: inline-block;
  width: 100%;
}

.post-completed {
  /* display: inline-block; */
  float: none;
  color: #777;
}

.post-content {
  padding: 10px;
  text-align: center;
}

.ratio:hover .ratio__content {
  transform: scale(1.2);
  transition-duration: 3s;
}

/* .post-title {
  margin: 0;
  margin-bottom: 10px;
} */

.post-text {
  /* opacity: 0; */
  position: absolute;
  bottom: 0;
  text-align: center;
  padding-left: 20px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .7);
  color: #fff;
  /* transform: translateY(120px); */
  transition-duration: .8s;
  opacity: 0;
}
.post-text h1 {
  margin-top: 25%;
  margin-left: -10%;
}

.ratio:hover .post-text {
  /* transform: translateY(0); */
  /* transition-duration: .8s; */
  opacity: 1;
}
.post-title{
  font-size: 26px;
}
a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}

.post-title {
  text-transform: uppercase;
  display: inline-block;
}

.ratio {
  position: relative;
  /* max-width: 800px; */
  /* max-height: 56.25%; */
  overflow: hidden;
  margin: 10px;
  z-index: 2;
  /* width: 50%; */
  
}

.ratio__content {
  transform: scale(1);
  transition-duration: 1s;
  max-width: initial;
  position: absolute;
  top: 0px;
  left: 0px;
  /* width: 100%; */
  /* height: 100%; */
}

.ratio:before {
  content: '';
  display: block;
  /* width: 50%; */
  padding-bottom: 56.25%;
  background: rgba(0, 0, 0, .3);
}




</style>

