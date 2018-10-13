<template>
  <div class="about-page large-container">
    <div class="">
      <h1 class="title">About Me</h1>
      <div class="text">
        <p>Hello, I'm a developer from NYC. Graduated from Binghamton University with a degree in Mathematics. Like most graduates,
          or maybe just me 😅, I did not have a specific path I wanted to do as a career. At the end of 2017, I decided to
          take it upon myself to learn web development/applications. To push myself in the field, I decided to work as a
          freelance developer. And here we are! 🤗</p>
      </div>
      <hr>
      <h1 class="title">Things I know</h1>
      <div class="text skills">
        <ul class="flex">
          <li><p>Node JS</p><i class="fab fa-node-js fa-2x"></i></li>
          <li><p>Vue JS</p><i class="fab fa-vuejs  fa-2x"></i></li>
          <li><p>CSS</p><i class="fab fa-css3-alt  fa-2x"></i></li>
          <li><p>SASS</p><i class="fab fa-sass  fa-2x"></i></li>
          <li><p>Gulp JS</p><i class="fab fa-gulp  fa-2x"></i></li>
          <li><p>Javascript</p><i class="fab fa-js  fa-2x"></i></li>
          <li><p>Python</p><i class="fab fa-python  fa-2x"></i></li>
          <!-- <li><i class="fab fa-github  fa-2x"></i>git</li> -->
        </ul>
      </div>
      <hr>
      <h1 class="title">Projects</h1>
      <div class="text">
        <ul>
          <li><a href="https://github.com/tiffanymarroq/portfolio" target="_blank">Portfolio Site</a>
          <p>Built my portfolio site on Nuxt JS, which is derived from Vue Js. It uses Dropbox as a content manager, Vuex, and modules </p>
          </li>
          <li><a href="https://github.com/tiffanymarroq/store-wp-theme" target="_blank">Wordpress Template</a>
            <p>Developed Wordpress Store theme from scratch using SCSS, Gulp, and Wordpress plugins</p>
          </li>
          <li><a href="https://github.com/tiffanymarroq/item-randomizer" target="_blank">Random Selector</a>
            <p>Created an input randomizer using VueJS. Add/Delete items</p>
          </li>
        </ul>
      </div>
      <hr>
      
      <div class="title facts">
        <h1>Fun Facts</h1>
        <p class="subtitle">Hover text</p>

      </div>
      <div class="text facts">
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

@media (min-width: 768px) {

}
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
    .title,.text{
      display: block;
      text-align: left;
    }
    .title{
      /* width: 40%; */
      margin: 0;
      margin-bottom: 20px;
      
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
      /* display:inline-block; */
      /* width:fit-content; */
      
    }
    li{
      position: relative;
      margin: 10px 0 ;
      /* width: auto; */
    }
    .facts li:hover img{
      display: block;
    }

    .facts{
      text-align: center;

    }
    .skills li{
      width: 80px;
    }
    .skills li:hover p{
      opacity: 1;

    }
    li i:hover{
      color: #AEEEEE;
    }
    .skills p {
      opacity: 0;
      text-align: center;
      width: 100%
    }
    img{
      display: none;
      position: absolute;
      top:-80px;
      right:0;
      z-index: -1;
      width: auto;
      max-width: 350px;
      max-height: 300px;
    }
    .text {
      /* width:59%; */
      margin-bottom: 20px;
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

