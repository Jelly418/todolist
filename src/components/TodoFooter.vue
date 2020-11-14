<template>
  <div class="todoFooter">
    <div class="left">
      <div class="main">
        <input type="checkbox" v-model="isAllCheck" />
        <label>全选</label>
      </div>
      <p>完成{{ completedNum }}个/共计{{ todoList.length }}个</p>
      <button @click="deleteCompleted" v-show="completedNum">
        删除已完成的
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TodoFooter',
  props: ['todoList', 'deleteCompleted', 'selectAll'],
  computed: {
    completedNum () {
      return this.todoList.reduce(
        (preTotal, todo) => preTotal + (todo.completed ? 1 : 0),
        0
      )
    },
    isAllCheck: {
      get () {
        return (
          this.completedNum === this.todoList.length && this.completedNum > 0
        )
      },
      set (value) {
        this.selectAll(value)
      }
    }
  }
}
</script>
<style scoped>
.todoFooter {
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
}
.left {
  /* border:1px solid; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 540px;
  box-sizing: border-box;
}
.main{
  display:flex;
   align-items: center;
}
.left input {
  width: 22px;
  height: 22px;
}
</style>
