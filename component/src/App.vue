<template>
  <div>
    <!-- <my-header :addTodo="addTodo" /> -->
    <!-- 自定义事件 -->
    <!-- <my-header @addTodo="addTodo" /> -->
    <!-- <my-header ref="myHeader" /> -->
    <!-- 插槽 -->
    <my-header ref="myHeader">
      <span>TO</span>
      <span slot="s1">DO</span>
      <template slot="s2">
        <span>S</span>
      </template>
    </my-header>
    <!-- <my-list
      :todos="todos"
      :delTodo="delTodo"
      :updTodoComplete="updTodoComplete"
    /> -->
    <my-list :todos="todos" :updTodoComplete="updTodoComplete" />
    <my-footer :todos="todos" :updTodo="updTodo" :clear="clear" />
    <hr />
    <my-axios />
    <hr />
    <my-search />
    <my-main />
  </div>
</template>

<script>
import MyFooter from "@/component/MyFooter.vue";
import MyHeader from "@/component/MyHeader.vue";
import MyList from "@/component/MyList.vue";
import MyAxios from "./component/MyAxios.vue";
import MySearch from "./component/MySearch.vue";
import MyMain from "./component/MyMain.vue";

export default {
  data() {
    return {
      todos: [],
    };
  },
  components: { MyHeader, MyList, MyFooter, MyAxios, MySearch, MyMain },
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
    // 绑定监听
    this.$refs.myHeader.$on("addTodo", this.addTodo);
    this.$bus.$on("delTodo", this.delTodo);
  },
};
</script>

<style scoped></style>
