<template>
  <div id="app">
    <!-- <TodoHeader :addTodo="addTodo"></TodoHeader> -->
    <TodoHeader @addTodo="addTodo"></TodoHeader>
    <TodoList :todoList="todoList" :deleteTodo="deleteTodo"></TodoList>
    <TodoFooter :todoList="todoList" :selectAll="selectAll" :deleteCompleted="deleteCompleted"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import storageUtil from './utils/storageUtil'
export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  data () {
    return {
      // 数据在哪，对数据的操作就在哪
      // 从localStorage读取数据,window.localStorage存的文本格式
      // window.localStorage.getItem('todoList_key') || '[]'返回的是字符串
      // todoList是数组，JSON格式字符串可转换为数组
      // JSON.parse(): JSON 字符串转换成为 JSON 对象
      // todoList: JSON.parse(window.localStorage.getItem('todoList_key') || '[]')
      todoList: storageUtil.readTodoList()
    }
  },
  methods: {
    // 添加todo
    addTodo (todo) {
      this.todoList.unshift(todo)
    },
    // 删除todo
    deleteTodo (index) {
      this.todoList.splice(index, 1)
    },
    // 删除已勾选的todo
    deleteCompleted () {
      this.todoList = this.todoList.filter(todo => !todo.completed)
    },
    // 全选/全不选
    selectAll (isCheck) {
      // eslint-disable-next-line no-return-assign
      this.todoList.forEach(todo => todo.completed = isCheck)
    }
  },
  watch: {
    todoList: {
      deep: true, // 深度监视
      // handler: function (value) { // 处理的回调函数
      //   // 将todoList最新值的json数据，保存到localStorage
      //   window.localStorage.setItem('todoList_key', JSON.stringify(value)) // JSON.stringify():将 JSON 转换成为 JSON 字符串。
      // }
      handler: storageUtil.saveTodoList
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display:flex;
  flex-direction: column;
  justify-content:content;
  width:620px;
  margin:80px auto;
}
/* body{
  background-image: "./assets/background.png";
} */
</style>
