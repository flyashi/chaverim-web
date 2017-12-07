<template>
  <div id='memberLogin'>
    <center><h2>Member Login</h2></center>
    <el-row :gutter='10'>
      <el-col :xs='24' :sm='11' :md='10' :lg='8' :xl='8'>
        Login by phone number
      </el-col>
      <el-col :xs='0' :sm='1' :md='1' :lg='1' :xl='1'>
        |
      </el-col>
      <el-col :xs='24' :sm='0' :md='0' :lg='0' :xl='0'>
        -
      </el-col>
      <el-col :xs='24' :sm='12' :md='10' :lg='8' :xl='8'>
        <el-button icon='el-icon-email'>Email</el-button>
      </el-col>
    </el-row>
    <hr/>
    <router-link to='Main'>Bypass</router-link>
  </div>
</template>

<script>

import 'element-ui/lib/theme-chalk/display.css'

export default {
  name: 'MemberLogin',

}
</script>

<style>

</style>
