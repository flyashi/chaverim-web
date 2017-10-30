<template>
  <div>
    <img src='../assets/Chaverim-TextLogo.png'/>
    <div v-for="route in routes" :key="route.path">
      {{route.meta.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      selectedIndex: -1
    }
  },
  computed: {
    routes: function() {
      return this.$router.options.routes
    }
  }
}
</script>

<style>

</style>
