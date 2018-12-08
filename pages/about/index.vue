<template>
  <div class="about-page large-container">
    <div class="about-content">
      <h1 class="title">About Me</h1>
      <div class="text">
        <p>Hello, I'm a developer from NYC. Graduated from Binghamton University with a degree in Mathematics. Like most graduates,
          or maybe just me , I did not have a specific path I wanted to do as a career. At the end of 2017, I decided to
          take it upon myself to learn web development/applications. To push myself in the field, I decided to work as a
          freelance developer. And here we are! </p>
      </div>
    <div class="contact">
      <p>Want to know more? Ask me! You can reach me at
        <a href="mailto:tiffany.marroq@gmail.com">tiffany.marroq@gmail.com </a>
      </p>
      <!-- <p>Have a great {{getDay()}}</p> -->
      <SocialMedia />
    </div>
  </div>
    </div>
  
</template>



<script>
import SocialMedia from '@/components/SocialMenu/SocialMedia';

export default {
  data() {
    return {
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
    }
  },
  methods: {
    getDay() {
      let today = new Date();
      return (this.days[today.getDay()]);
    }
  },
  components:{
    SocialMedia
  }
}

</script>

<style scoped>

    .contact{
      text-align: center;
    }
    .contact p {
      width: 100%;
    }
    .about-page{
        text-align: center;
        padding: 30px;
    }
    .about-content{
      max-width: 750px;
      margin: 0 auto;
    }
    .title,.text{
      display: block;
      text-align: left;
    }
    .title{
      /* width: 40%; */
      margin: 0;
      margin-bottom: 20px;
      text-align: center;
      font-size: 40px;
      
    }
    h1{
      margin: 0;
    }
    p{
      margin: 0;  
    }
    p,li{
      font-size: 1.2rem;
      cursor: default;

      
    }
    li{
      position: relative;
      margin: 10px 0 ;
      /* width: auto; */
    }
  
    .text {
      /* width:59%; */
      margin-bottom: 20px;
      text-align: center;
      line-height: 1.6;
    }
    .contact{
      position: relative;
    }
    .flex{
      display: flex;
      justify-content: center;
      text-align: center;
    }

</style>

