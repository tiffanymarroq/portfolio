<template>
  <nuxt-link :to="{name: postLink, params:{  postTitle: convertTitle, postID: id }}" class="post-preview" :class="{adminPost: isAdmin}">
    <article>
        
        <div class="ratio" >
            <h1 class="post-heading">{{title}}</h1>
          
          <img v-lazy="thumbnail" alt=""  class="ratio__content">
          <div class="post-title">
            <p>{{previewText}}</p>
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
<style scoped>.post-preview {
  background-color: white;
  width: 90%;
  margin-bottom: 30px;
}

a {
  text-decoration: none;
  color: black;
}
.adminPost{
  max-width: 300px!important;
  /* max-height: 250px; */
  margin: 10px 0 ;
  margin-left: auto;
  margin-right: auto;
}
.adminPost .post-title{
  transform: translateY(0px);
  

}
@media (min-width: 850px) {
  .post-preview {
    width: 70%;
  }
  .adminPost{
  margin: 10px  ;

  }
}
.post-heading{
  /* margin-left:10px; */
}
.post-content {
  padding: 10px;
  text-align: center;
}

.post-title {
  /* opacity: 0; */
  position: absolute;
  bottom: 0;
  text-align: left;
  width: 100%;
  background: rgba(0, 0, 0, .7);
  color: #fff;
  transform: translateY(120px);
  transition-duration: .8s;
}
.post-title h1,
.post-title p{
  display: inline-block;
  width: 48%;
  padding-left: 10px;
  
}

.ratio:hover .post-title {
  transform: translateY(0);
  transition-duration: .8s;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}

.post-title {
  text-transform: uppercase;
}

.ratio {
  position: relative;
  max-width: 800px;
  max-height: 400px;
  overflow: hidden;
  margin: 0 auto;
}
.ratio__content{
  max-width: initial;
  
}





</style>

