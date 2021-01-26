<template>
  <div>
    <my-header :addTodo="addTodo" />
    <my-list
      :todos="todos"
      :delTodo="delTodo"
      :updTodoComplete="updTodoComplete"
    />
    <my-footer :todos="todos" :updTodo="updTodo" :clear="clear" />
  </div>
</template>

<script>
import MyFooter from "@/component/MyFooter.vue";
import MyHeader from "@/component/MyHeader.vue";
import MyList from "@/component/MyList.vue";

export default {
  data() {
    return {
      todos: [],
    };
  },
  components: { MyHeader, MyList, MyFooter },
  methods: {
    addTodo(todo) {
      // this.todos.push(todo);
      this.todos.unshift(todo);
    },
    delTodo(index) {
      this.todos.splice(index, 1);
    },
    updTodo(v) {
      this.todos.forEach((todo) => (todo.complete = v));
    },
    clear() {
      this.todos = this.todos.filter((todo) => !todo.complete);
    },
    updTodoComplete(index, v) {
      this.todos[index].complete = v;
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
      },
    },
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem("todos") || "[]");
  },
};
</script>

<style scoped></style>
