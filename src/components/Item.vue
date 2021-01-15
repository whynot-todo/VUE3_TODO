<template>
    <li
        @mouseenter="mouseHander(true)"
        @mouseleave="mouseHander(false)"
        :style="{ backgroundColor: bgColor, color: color }"
    >
        <label>
            <input type="checkbox" v-model="isCompeleted" />
            <span>{{ todo.name }}</span>
        </label>
        <button class="btn btn-danger" v-show="isShow" @click="delTodo(index)">
            删除
        </button>
    </li>
</template>

<script lang ='ts'>
import { computed, defineComponent, ref } from 'vue'
export default defineComponent({
    name:'Item',
    props:{
        todo:{
            type:Object,
            required:true
        },
        deleteTodo:{
            type:Function,
            required:true
        },
        updateTodo:{
            type:Function,
            required:true
        },
        index:{
            type:Number,
            required:true
        }
        
    },
    setup ({todo,deleteTodo,updateTodo}) {
        const bgColor = ref("white")
        const color = ref("black")
        const isShow = ref(false)

        const mouseHander = (flag:boolean) => {
            if(flag){
                bgColor.value = "pink"
                color.value = "green"
                isShow.value = true
            }else{
                bgColor.value = "white"
                color.value = "black"
                    isShow.value = false
            }
        }

        // 删除
        const delTodo = (index:number) => {
            if (window.confirm("确定要删除吗？")) {
                deleteTodo(index)
            }
        }
        
        // 任务状态改变，计算属性返回的就是响应式数据
        const isCompeleted = computed({
            get () {
                return todo.isCompeleted
            },
            set (val) {
                updateTodo(todo,val)
            }
        })

        return{
            bgColor,
            color,
            isShow,
            isCompeleted,
            mouseHander,
            delTodo
        }
    },
  components:{

  }
})
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
</style>