<template>
  <div id="app">

    <img src="./assets/logo.jpg"><br>
  
    <router-link to="/home">Home</router-link> |

    <router-link to="/login">Login</router-link> |
    <router-link to="/signup">SignUp</router-link> |
    <router-link to="/logout">Log Out</router-link> 

    
   
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
img{
  width:130px;
}
</style>
