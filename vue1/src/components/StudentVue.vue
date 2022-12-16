<template>
  <div>

    <h1>Registration Form </h1>
    <form  @submit.prevent="save">
    <div class="register">
        <input type="text"  v-model="student.name" placeholder="Enter Name" />
        <input type="text" v-model="student.address" placeholder="Enter Address" />
        <input type="text" v-model="student.phone" placeholder="Enter Phone Number" />
        
        <button v-on:click="save()"> Save</button>
    </div>
    </form>
   
   <h2>Students list</h2>
    <table class="table table-hover table-light mx-auto w-75">
    <thead>
        <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="student in result" v-bind:key="student.id">
        <th>{{student.id}}</th>
        <td>{{student.name}}</td>
        <td>{{student.address}}</td>
        <td>{{student.phone}}</td>
        <td>
            <th>
            <button type="button" class="btn btn-warning" @click="edit(student)">Edit</button>
            <button type="button" class="btn btn-danger" @click="remove(student)">Delete</button>
            </th>
        </td>
        </tr> 
    </tbody>
    </table>
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
        address:'',
        phone:''
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
    },
    edit(student){
        this.student= student;
    },
    updatedata(){
        var editrecords = 'http://127.0.0.1/api/update/'+this.student.id;
        axios.put(editrecords, this.student)
        .then(
            ({data})=>{
               
                this.student.name='';
                this.student.address='';
                this.student.phone='';
                // this.student.id=''
                alert("Updated");

                this.StudentLoad();

            }
        )
    },

    remove(student){
        var url = 'http://127.0.0.1/api/delete/'+ student.id;
        axios.delete(url);
        alert("deleted");
        this.StudentLoad();

    }
  }
}
</script>
<style scoped>
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

