<template>
   <li class="todo">
     <div class="item">
       <input  type="checkbox" v-model="todo.completed"/>
       <p >{{todo.content}}</p>
    </div>
    <button  type="button" @click="deleteItem">删除</button>
   </li>
</template>
<script>
export default {
  name: 'TodoItem',
  props: ['todo', 'deleteTodo', 'index'],
  methods: {
    deleteItem () {
      const {deleteTodo, index} = this
      deleteTodo(index)
    }
  }
}
</script>
<style scoped>
.todo{
  list-style-type: none;
  border:1px solid;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width:540px;
  height:32px;
  border-radius: 3px;
  margin-bottom: 10px;
}
.item{
  display: flex;
  align-items: center;
}
.item input{
  width: 22px;
  height:22px;
  margin-right:10px;
}

</style>
