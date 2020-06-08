<template>
  <div>
    <p>list</p>
    <ul>
      <li v-for="(item,index) in pageLists" :key="index">
        {{item.title}}---{{item.content}}
      </li>
    </ul>

  </div>
</template>

<script>
  /**
   * 引入全局变量
   */
  import store from '@/store'
  export default {
    //注意这里要引用一下,不引用也不报错,但不规范
    name:"list",
    store,
    /**
     * computed 会监听方法内部申明的变量,变量如果改变会赋值给pageLists,上面for循环中又引用了pageLists这个值
     */
    computed:{
      pageLists(){
        console.log(this.$store.state.lists)
        return store.state.lists
      }
    }
  }
</script>

<style scoped>

</style>
