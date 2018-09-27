<template>
    <div class="single-post-page">
        <section class="post" >
            <h1 class="post-title">{{loadedPost.title}}</h1>
            <p class="post-tags">{{loadedPost.tags}}</p>
            <a target="_blank" v-show="loadedPost.url != ''" :href="loadedPost.url">Live Site</a>
            <!-- <div class="post-details">
                <div class="post-detail">Last updating on {{loadedPost.updatedDate | date}}</div>
                <div class="post-detail">Written by {{loadedPost.author}}</div>
            </div> -->
            <p class="post-content">{{loadedPost.content}}</p>
        </section>
        <div v-for="(img,index) in loadedPost.images" v-if="index >= 1" :key="index">
          <img v-lazy="img.link" alt="" style="width: 100%; margin: 20px 0 ">
        </div> 
    </div>
</template>
<script>
export default {
  data(){
    return{
      id: '',
      loadedPost: []
    }
  },
  asyncData(context) { 
    if(context.payload){
      console.log('payload')
      return {
        loadedPost: context.payload.postData

      }
    }
    return context.app.$axios.$get(
      '/posts/' +
      context.params.postID +
      '.json')
    .then( data => {
      return {
        loadedPost: data,
        post: data.id
      }
    })
    .catch( e => console.log(e))
  },

  head: {
    title: 'blog'
  }
}

</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
}
.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto; 
  }
}

.post-title {
  margin: 0;
  text-transform: uppercase
}
.post-tags{
  color: #777;
}
.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>

