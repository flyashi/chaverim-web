<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :router="true">
    <el-menu-item index="/">
      <img src='../assets/Chaverim-TextLogo.png' width=60px height=60px/>
    </el-menu-item>
    <!-- <div v-for="route in routes" :key="route.path">
      {{route.meta.title}}
    </div> -->
    <el-menu-item v-for="(route, index) in routes" :key="route.path" :index="`${route.path}`" :style="styleForRoute(route)">
      {{route.meta.title}}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      activeIndex: '/'
    }
  },
  computed: {
    routes: function() {
      return this.$router.options.routes.filter(x => (x.meta && x.meta.title))
    }
  },
  methods: {
    styleForRoute(route) {
      if (route.name === 'MemberLogin') {
        return 'float: right; color: red; padding: 3px;'
      }
      return ''
    }
  },
  mounted: function() {
    // debugger
    // console.log(`route.path=${this.$route.path}`)
    this.activeIndex = this.$route.path
  }
}
</script>

<style>

</style>
