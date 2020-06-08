<template>
  <div>
   <!--注意router-view相当于是子容器,就是在一个页面内转动-->
    <router-view/>
    <ul>
      <li>
        <!--router-link 和 router/index.js的路由配置中的name对应-->
        <router-link :to="{name: 'list'}">新闻列表</router-link>
      </li>
      <li>
        <router-link :to="{name: 'user'}">个人中心</router-link>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: "home"
  }
</script>

<style scoped>

</style>
