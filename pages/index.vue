<template>
  <div class="home-page smooth">
    <section id="intro">
      <div id="intro-text">
        <h1 class="title">Hello There!</h1>
        <h1 class="subtitle">Front-End developer from NYC helping startups build digital experiences</h1>
        <SocialMedia />
        <br>
      <!-- <a  class="" href="#work"><p class="subtitle">See Work</p></a> -->
        

      </div>
    </section>
    <div id="work">
    <PostList :posts="loadedPosts" />
      
    </div>
  </div>
</template>
<script>
import SocialMedia from '@/components/SocialMenu/SocialMedia';
export default {
  data(){
    return{
      title: ''
    }
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
    dbPosts(){
      this.$axios.get('http://localhost:3000/api/posts')
      .then(data => {
        console.log('in database');
        console.log(data.data);
        this.title = data.data[0].title;
        // return datajson[0].title;
        return data.data;
      })
      .catch(err => console.log(err))
    }
  },
  components:{
    SocialMedia
  },
  methods:{

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