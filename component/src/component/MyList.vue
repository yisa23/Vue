<template>
  <ul>
    <my-item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      :index="index"
      :delTodo="delTodo"
      :updTodoComplete="updTodoComplete"
    />
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  components: {
    MyItem,
  },
  props: ["todos", "delTodo", "updTodoComplete"],
};
</script>

<style scoped></style>
