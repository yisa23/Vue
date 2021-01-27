<template>
  <li :style="{ background }" @mouseenter="fn(true)" @mouseleave="fn(false)">
    <input type="checkbox" v-model="ck" />
    <span>{{ todo.title }}</span>
    <button @click="del" v-show="isShow">删除</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
    index: {
      type: Number,
    },
    // delTodo: Function,
    updTodoComplete: Function,
  },
  methods: {
    fn(isShow) {
      this.background = isShow ? "#ccc" : "#fff";
      this.isShow = isShow;
    },
    del() {
      // this.delTodo(this.index);
      this.$bus.$emit("delTodo", this.index);
    },
  },
  data() {
    return {
      background: "#fff",
      isShow: false,
    };
  },
  computed: {
    ck: {
      get() {
        return this.todo.complete;
      },
      set(v) {
        this.updTodoComplete(this.index, v);
      },
    },
  },
};
</script>

<style scoped></style>
