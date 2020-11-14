// 使用localStorage存储数据的工具模块
// 向外暴露函数或对象，选择依据：暴露功能的个数
// 1、函数-----一个功能
// 2、对象-----多个功能
const TODOLIST_KEY = 'todoList_key'
export default{
  saveTodoList (todos) {
    window.localStorage.setItem(TODOLIST_KEY, JSON.stringify(todos))
  },
  readTodoList () {
    return JSON.parse(window.localStorage.getItem(TODOLIST_KEY) || '[]')
  }
}
