<template>
  <div class="home-page">
    <section id="intro">
      <div id="intro-text">
        <h1>Front-End Developer</h1>
        <ul class="social-media">
          <li><i class="fab fa-github fa-2x" ></i></li>
          <li><i class="fab fa-linkedin fa-2x"></i></li>
          <li><i class="fab fa-twitter fa-2x"></i></li>
        </ul>
      </div>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>
<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }, 
}
</script>
<style scoped>

@media (min-width: 768px) {

}

#intro{
  position: relative;
  height: 500px;
  width: 100%;
  background: rgba(0,0,0,.6);
  color: #fff;

}
#intro-text{
    text-align: center;
  margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
}
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: left;
  justify-content: left;
}

.social-media li{
  display: inline-block;
  margin-left: 10px;

}
</style>