<template>
  <div id="app" class="container">
    <app-input-box></app-input-box>
    <app-todo-list></app-todo-list>
  </div>
</template>

<script>
import InputBox from './components/InputBox.vue';
import TodoList from './components/TodoList.vue';
export default {
  components: {
    'app-input-box': InputBox,
    'app-todo-list': TodoList
  },
  data () {
    return {}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
