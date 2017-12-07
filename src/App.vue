<template>
  <el-container id="app">
    <el-header><navbar/></el-header>
    <el-main><router-view/></el-main>
    <el-footer><footer-view/></el-footer>
  </el-container>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components: {
    'navbar': NavBar,
    'footer-view': Footer
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
}
</style>
