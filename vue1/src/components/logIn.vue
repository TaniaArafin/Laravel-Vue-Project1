<template>
<div>
   <p>{{student}}</p>

    <p class="text-danger" v-if="error"> {{error}}</p>
    <form  @submit.prevent="login">
    <div class="login">
        <input type="email"  v-model="student.email" placeholder="Enter Email" />
        <input type="password"  v-model="student.password" placeholder="Password" />
        <input type="submit" value="Log In" />
    </div>
    </form>
</div>
    
</template>
<script>
// import Vue from 'vue';
// import axios from 'axios';
// Vue.use(axios)

import {reactive, ref} from 'vue'
import { useRouter} from "vue-router"

export default {
  setup(){
    const router = useRouter()
    let student = reactive({
      email: '',
      password:'',

    });
    let error = ref('')

    const login = async() =>{
      await axios.post('http://127.0.0.1/api/login', student)
      .then(response=>{
        if(response.data.success){
          localStorage.setItem('token',response.data.data.token)
          router.push({name:LogOut})

        }
        else{
          error.value = response.data.message;
        }
      })

    }
    return {
      student,
      login,
      error
    }

  }
    // name: 'logIn',
    // data (){
    //   return {
    //     result: {},
    //     student:{
    //         email:'',
    //         password:'',
    //     },
    //     error:'',
    //   }
    // },
    // methods:{
    //   async login(){
    //       await axios.post('http://127.0.0.1/api/login', this.student)
    //       .then(response=>{
    //         if(response.data.success){
    //           localStorage.setItem('token', response.data.success)
    //         }
    //         else{
    //           error.value = response.data.message;
    //         }
    //       })
    //   }
    // }
}

</script>
<style scoped>
.login input{
    
    width:300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right:auto;
    border:1px solid rgba(45,79,116,255);
}
.login{
    margin-top:150px;
}



</style>
