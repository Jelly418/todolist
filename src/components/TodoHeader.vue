<template>
    <div class="add">
      <h1>ToDoList</h1>
      <input type="text" v-model="content" @keyup.enter="add" placeholder="请输入文字，按enter键入"/>
    </div>
</template>
<script>
export default {
  name: 'TodoHeader',
  // props: {
  //   addTodo: Function
  // },
  data () {
    return {
      content: ''
    }
  },
  methods: {
    add () {
      const {content} = this
      if (!this.content) {
        alert('内容不能为空')
        return
      }
      const todo = {content, completed: false}
      // this.addTodo(todo)
      this.$emit('addTodo', todo)
      this.content = ''
    }
  }
}
</script>
<style scoped>
/* .add{
  border: 1px solid;
} */
.add input{
  width:540px;
  height:32px;
  box-sizing: border-box;
  border-radius: 3px;
}
</style>
