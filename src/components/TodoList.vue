<template>
    <div class="todoList">
       <ul>
           <todo-item v-for="(todo,index) in todoList " :key="index" :todo = "todo" :deleteTodo="deleteTodo" :index="index"></todo-item>
       </ul>
    </div>
</template>
<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'TodoList',
  components: { TodoItem },
  props: ['todoList', 'deleteTodo']
}
</script>
<style scoped>
/* .todoList{
    border:1px solid;
} */
</style>
