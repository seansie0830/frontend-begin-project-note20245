<template>
  <v-app>
    <wnav />
    <v-main>
      <RouterView />
    </v-main>
    <vfooter />
  </v-app>
</template>

<script>
import wnav from "./components/navbarapp.vue"
import vfooter from "./components/footer.vue"

export default{
  components:{
    wnav,
    vfooter
  },
  data(){
    return{
      
    }
  }
}
</script>