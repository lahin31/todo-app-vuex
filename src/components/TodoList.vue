<template>
    <div class="todoListHeader">
        <h1>All Todos</h1>
        <div v-for="todo in todos" class="todoLists">
            <h4>{{ todo.content }} <span class="label label-danger" @click="deleteTodoFun(todo)">Delete</span></h4>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            content: ''
        }
    },
    computed: {
        todos() {
            return this.$store.getters.getAllTodoDetails;
        }
    },
    methods: {
        deleteTodoFun(todo) {
            this.$store.commit('deleteTodo', todo);
        }
    }
}
</script>

<style>
.todoListHeader {
    width: 400px;
    margin-top: 50px;
}
.todoLists {
    margin-top: 40px;
}
</style>