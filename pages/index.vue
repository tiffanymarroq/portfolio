<template>
  <div class="home-page">
    <section >
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

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>