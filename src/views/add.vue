<template>

  <div>
    <!--在template中使用到的变量一定是在下面data中定义的对象,且不能使用v-bind来代替v-model-->
    <p>标题</p>
    <input type="text" v-model="title">
    <p>内容</p>
    <input type="text" v-model="content">
    <br/>
    <button type="button" @click="add()">添加</button>
  </div>


</template>

<script>
  import store from '@/store'

  export default {
    name: "add",
    store,
    data() {
      return {
        title: '',
        content: ''
      }
    }, methods: {
      add() {
        /**
         * addItem 名字和/store/index.js中定义的方法名字对应
         * 这里是store,始终不能传递到list页面中
         */
        store.commit("addItem",
          /**通过对象的方式传递值*/
          {
            title: this.title,
            content: this.content
          })
        this.title = ''
        this.content = ''
        /**
         * 从这里直接去list页面
         */
        this.$router.push('/home/list')

      }
    }
  }
</script>

<style scoped>

</style>
