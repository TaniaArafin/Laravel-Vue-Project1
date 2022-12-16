<template>
  <div>
    
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

</script>

