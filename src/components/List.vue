<template>
    <ul class="todo-main">
        <Item v-for="(todo,index) in todos" :key="todo.id" :todo="todo" :deleteTodo="deleteTodo" :updateTodo="updateTodo" :index="index"/>
    </ul>
</template>

<script lang ='ts'>
import { defineComponent, onMounted } from 'vue'
import Item from './Item.vue' 
export default defineComponent({
  name:'List',
  props:["todos","deleteTodo","updateTodo"],// 标签上的属性名，注意是字符串形式
  setup () {

  },
  components:{
    Item
  }
})
</script>

<style scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>