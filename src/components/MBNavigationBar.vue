<template>
  <div id="bar" class="ui borderless fluid fixed top menu">


    <!-- Render a link to the landing page or the dashboard. (depending on login state.) -->
    <router-link :to="this.hompagePath" class="item" id="home-button" >
      <img src="../../assets/img/o-black.png" id='logo' alt='logo' class='logo'/>
      <img src="../../assets/img/wal-transparent.png" id='static-logo' alt='logo' class='logo2'/>      
    </router-link>

    <!-- Render buttons for routes with `meta: {nav: true} in them. -->
    <navbutton :classes="route.classes" v-for="route in this.visibleRoutes" :url="route.path" :title="route.name" :key='route.path'></navbutton>

    <!-- Log in or Log out button -->
    <a href="#" v-on:click="logOut" v-if="this.authenticated" class="ui item right">Log Out ({{ username }})</a>
    <g-signin-button v-else class="ui item right googleRed" :params="googleSignInParams" @success="loginSuccess" @error="loginError">
      Log in with Google
    </g-signin-button>
  </div>
</template>

<script>
import navbutton from './NavigationButton.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'NavigationBar',
  components: {navbutton},
  computed: {
    ...mapGetters({
      authenticated: 'isAuthenticated',
      title: 'title'
    }),
    hompagePath () {
      return this.authenticated ? '/dashboard' : '/'
    },
    username () {
      return this.$store.getters.displayName
    },
    visibleRoutes () {
      const routes = this.$router.options.routes
      const navRoutes = routes.filter(route => {
        const isNavBarRoute = route.meta && route.meta.navbar

        var isAuthRoute = false

        if (route.meta) {
          isAuthRoute = route.meta.auth === true
        }

        const isAuthenticated = this.authenticated

        if (!isNavBarRoute) {
          return false
        } else if (isAuthRoute && !isAuthenticated) {
          return false
        }

        route.classes = this.classesForRoute(route)

        return true
      })

      return navRoutes
    },
    googleSignInParams () {
      return {
        client_id: '1027062249723-4qpght8p42fd88an4usq4cpvfgu3t1el.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    ...mapActions(['loginSuccess', 'loginError', 'logOut']),
    classesForRoute: function (route) {
      var classes = 'item'

      if (route.meta && route.meta.auth) {
        classes = 'item float right'
      }

      return classes
    }
  }
}
</script>

<style scoped>

g-signin-button 
{
  background-color: #ffffff;
}

g-signin-button:hover 
{
  background-color: rgba(0, 0, 0, 0.05);
}

.googleRed
{
  color: #dd4b39 !important;
}

#home-button #logo {
  animation: logo-spin-reverse 1 0.15s linear;
  margin-right: 8px;
}
#static-logo {
  height: 120%;
  width: 50%;
  
}
#home-button:hover #logo
{
  animation: logo-spin 1 0.15s linear;
}

@keyframes logo-spin 
{
  from {transform: rotate(0deg); }
  to {transform: rotate(180deg);}
}

@keyframes logo-spin-reverse {
  from {transform: rotate(180deg); }
  to {transform: rotate(0deg);}
}

</style>
