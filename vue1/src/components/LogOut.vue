<template>
<button type="button" class ="btn-btn-dark mt-2" @click="logout">Log Out</button>

    
</template>
<script>
import { useRouter} from "vue-router"
export default{
   

    setup(){
        function logout(){
            localStorage.removeItem('token');
            router.push({name:HomeVue})

        }
        return {
            logout
        }

        

    }
}

</script>

<style scoped>

</style>
