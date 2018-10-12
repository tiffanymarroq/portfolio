<template>
  <div class="about-page large-container">
    <div class="flex">
      <h1 class="title">About Me</h1>
      <div class="text">
        <p>Hello, I'm a developer from NYC. Graduated from Binghamton University with a degree in Mathematics. Like most graduates,
          or maybe just me 😅, I did not have a specific path I wanted to do as a career. At the end of 2017, I decided to
          take it upon myself to learn web development/applications. To push myself in the field, I decided to work as a
          freelance developer. And Here we are! 🤗</p>
      </div>

      <h1 class="title">Things I know</h1>
      <div class="text">
        <ul>
          <li>Node JS</li>
          <li>Vue</li>
          <li>React</li>
          <li>CSS/SCSS</li>
          <li>Gulp Workflow</li>
          <li>JS</li>
        </ul>
        <ul>
          <li>Marketing Strategies</li>
          <li>Data Collecting</li>
          <li>Management</li>
          <li>Teamwork</li>
        </ul>
      </div>

      <h1 class="title">Projects</h1>
      <div class="text">
        <ul>
          <li>Wordpress Template</li>
          <li>Vue Random Selector</li>
          <li>Json Filter on Hierarchy</li>
        </ul>
      </div>
      <div class="title">
        <h1>Fun Facts</h1>
        <p class="subtitle">Hover text</p>

      </div>

      <div class="text">
        <ul>
          <li>
            <p>Dogs > Cats</p>
            <img src="~/assets/images/dog-ears.gif" width="219" height="380" frameBorder="0" class="giphy-embed">
          </li>
          <li>
            <p>Tea Drinker</p>
            <img src="~/assets/images/tea.gif" width="380" height="168" frameBorder="0" class="giphy-embed">
          </li>
          <li>
            <p>Enjoys to Travel</p>
            <img src="~/assets/images/adventure.gif" width="480" height="192" frameBorder="0" class="giphy-embed">
          </li>
        </ul>
      </div>
    </div>


    <div class="contact">
      <h1>Want to know more?</h1>
      <p>Ask me! You can reach me at
        <a href="mailto:tiffany.marroq@gmail.com">tiffany.marroq@gmail.com 💌</a>
      </p>
      <p>Have a great {{getDay()}}</p>
      <SocialMedia />
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
    .about-page{
        text-align: center;
        padding: 30px;
    }
    .title,.text{
      display: block;
      text-align: left;
    }
    .title{
      width: 40%;
      margin: 0;
      margin-bottom: 20px;
      
    }
    h1{
      margin: 0;
    }
    p{
      margin: 0;
      
    }
    li{
      position: relative;
      margin: 10px 0 ;
      width: auto;
    }
    li:hover img{
      display: block;
    }
    img{
      display: none;
      position: absolute;
      top:-50px;
      right:0;
      z-index: 3;
      width: auto;
      max-width: 350px;
      max-height: 300px;
    }
    .text {
      width:59%;
      
      margin-bottom: 20px;
    }
    .contact{
      position: relative;
    }
    .flex{
      display:flex;
      justify-content: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;
      
    }
</style>

