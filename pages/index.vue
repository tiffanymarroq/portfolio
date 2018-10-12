<template>
  <div class="home-page">
    <section id="intro">
      <div id="intro-text">
        <h1 class="title">Hello There!</h1>
        <h1 class="subtitle">Front-End developer from NYC helping startups build digital experiences</h1>
        <SocialMedia />
        <br>
      <p class="subtitle">See Work</p>
        

      </div>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>
<script>
import SocialMedia from '@/components/SocialMenu/SocialMedia';
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  components:{
    SocialMedia
  } 
}
</script>
<style scoped>
#intro{
  position: relative;
  min-height: 400px;
  max-height: 747px;
  width: 100%;
  margin: 0 20px;
  

}

#intro-text{
    text-align: left;
    /* font-size: 1em; */
  width: 100%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
}
#intro-text h1{
  font-size: 2em;
  
}
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: left;
  justify-content: left;
}
@media (min-width: 850px) {
#intro-text{
    /* font-size: 1em; */
    max-width: 750px;
    
  }
  #intro{
    margin: 0;
  }
}

</style>