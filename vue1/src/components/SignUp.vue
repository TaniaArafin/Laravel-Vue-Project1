<template>
    <div>
        <form  >
        <div class="register">
        <input type="text"  placeholder="Enter Name" />
        <input type="text"  placeholder="Enter Email" />
        <input type="password"  placeholder="Enter Password" />
        <input type="password"  placeholder="Confirm Password" />
        
        <button v-on:click="save()"> Save</button>
    </div>
    </form>
    </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
Vue.use(axios)
export default {
  name: 'StudentVue',
  data (){
    return {
      result: {},
      student:{
        id:'',
        name:'',
        email:'',
        password:'',
    
      }
    }
   },
  created(){
    this.StudentLoad();
  },
  methods:{
    StudentLoad(){
        var page = "http://127.0.0.1/api/students";
        axios.get(page)
            .then(
               ({data})=>{
                console.log(data);
                this.result = data;
               }
            );
    },
    save(){
        if(this.student.id==''){
            this.saveData();
        }
        else{
            this.updatedata();
        }
    },
    saveData(){
        console.log(this.student)
        axios.post('http://127.0.0.1/api/save', this.student)
            .then(
                ({data})=>{
                    alert('saved');
                }
                
            )
             this.StudentLoad();
    }
  }
}

</script>
<style scoped>
.register{
    margin-top:50px;
}
.register input{
    width:300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right:auto;
    border:1px solid rgba(45,79,116,255);
}
.register button{
    width:300px;
    height:40px;
    border:1px solid rgba(45,79,116,255);
    color:#fff;
    background-color: rgba(7,122,193,255) ;
}
</style>
