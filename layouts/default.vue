<template>
  <div >
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
    <TheSideNav
        :show="displaySidenav"
        @close="displaySidenav = false" />
    <nuxt class="default" />
  </div>
</template>

<script>
  import TheHeader from '@/components/Navigation/TheHeader'
  import TheSideNav from '@/components/Navigation/TheSideNav'
  

export default {
  data() {
    return {
      displaySidenav: false
    }
  },
  components:{
    TheHeader,
    TheSideNav
  },
  // middleware: 'log',
}
</script>


<style>
  html{
    font-family: 'Nunito', sans-serif
  }
  body{
    margin: 0;
  }
  .default{
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
