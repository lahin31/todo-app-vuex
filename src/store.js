import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todoDetails: []
    },
    getters: {
        getAllTodoDetails(state) {
            return state.todoDetails;
        }
    },
    mutations: {
        addTodo(state, text) {
            const newTodo = {
                content: text
            }
            state.todoDetails.push(newTodo);
        },
        deleteTodo(state, todo) {
            state.todoDetails.splice(
                state.todoDetails.indexOf(todo),1
            )
        }
    },
    actions: {
        addTodoActions(data, text) {
            setTimeout(()=>{
                data.commit('addTodo', text)
            }, 1000);
        }
    }
})