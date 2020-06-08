<template>
  <div>
    <button type="button" @click="login()">登陆 </button>
    <button type="button" @click="login()">注册 </button>
  </div>

</template>

<script>
    export default {
        name: "login",
        methods:{
          login:function () {
              this.$router.push("/home/list")
          }
          
        }
    }
</script>

<style scoped>

</style>
