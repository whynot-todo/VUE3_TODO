<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <Header :addTodo="addTodo"></Header>
            <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" ></List>
            <Footer :todos="todos" :checkAll="checkAll" :clearAllCompletedTodo="clearAllCompletedTodo"></Footer>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
import Header from './components/Header.vue' 
import List from './components/List.vue' 
import Footer from './components/Footer.vue' 
import {Todo}from './types/todo' 
import {setTodos,readTodos}from './utils/localStorageUtils' 
export default defineComponent({
  name:'App',
  setup () {
    // 数据
    const todos = reactive<{todos:Todo[]}>({ // 必须传递对象
      todos:[]
    })
    // 声明周期函数
    onMounted(() => {
      setTimeout(() => {
        todos.todos = readTodos()
      }, 1000)
    })
    // 方法
    // 添加任务
    const addTodo = (todo:Todo) => {
      todos.todos.unshift(todo)
    }
    // 删除任务
    const deleteTodo = (index:number) => {
      todos.todos.splice(index,1)
    }
    // 更新完成状态
    const updateTodo = (todo:Todo,isCompeleted:boolean) => {
      todo.isCompeleted = isCompeleted
    }
    // 全选、全不选
    const checkAll = (isCompeleted:boolean) => {
      todos.todos.forEach(todo => {
        todo.isCompeleted = isCompeleted
      })
    }
    // 清除已完成任务
    const clearAllCompletedTodo = () => {
      todos.todos = todos.todos.filter(todo => !todo.isCompeleted)
    }
    // 监视数据
    watch(() => todos.todos,setTodos,{deep:true})
    
    return {
      ...toRefs(todos), //将对象中的属性变为响应式数据，并解包
      addTodo,
      deleteTodo,
      updateTodo,
      checkAll,
      clearAllCompletedTodo
    }
  },
  components:{
    Header,List,Footer
  }
})
</script>

<style scoped>
/*app*/
.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>