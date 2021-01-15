<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="isCheckAll" />
        </label>
        <span>
            <span>已完成{{ count }}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" @click="clearAllCompletedTodo">清除已完成任务</button>
    </div>
</template>

<script lang ='ts'>
import { Todo } from '@/types/todo'
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name:'Footer',
  props:{
      todos:{
          type:Array as () => Todo[],
          required:true
      },
      checkAll:{
          type:Function,
          required:true
      },
      clearAllCompletedTodo:{
          type:Function,
          required:true
      }
  },
  setup ({todos,checkAll}) {

      const count = computed(() => {
          // 注意这里需要两次返回
          return todos.reduce((pre,todo) =>  pre + (todo.isCompeleted?1:0)
          ,0)
      })
      const isCheckAll = computed({
          get () {
              return count.value > 0 && count.value == todos.length
          },
          set (val) {
              checkAll(val)
          }
      })
      return {
          count,
          isCheckAll
      }
  },
  components:{

  }
})
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>