<template>
  <div >
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
    <TheSideNav
        :show="displaySidenav"
        @close="displaySidenav = false" />
    <nuxt class="default" />
    <Footer />
  </div>
</template>

<script>
  import TheHeader from '@/components/Navigation/TheHeader'
  import TheSideNav from '@/components/Navigation/TheSideNav'
  import Footer from '@/components/Footer/Footer'
  

export default {
  data() {
    return {
      displaySidenav: false
    }
  },
  components:{
    TheHeader,
    TheSideNav,
    Footer
  },
  // middleware: 'log',
}
</script>


<style>
  html{
    font-family:  Helvetica, sans-serif, sans-serif
  }
  body{
    margin: 0;
  }
  .default{
    margin: 0 auto;
    min-height: 100vh ;
  }
</style>
