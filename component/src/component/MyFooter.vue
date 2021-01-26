<template>
  <div>
    <input type="checkbox" v-model="ck" />
    <span>{{ len }}/{{ todos.length }}</span>
    <button @click="clear" v-show="len">按钮</button>
  </div>
</template>

<script>
export default {
  props: ["todos", "updTodo", "clear"],
  computed: {
    len() {
      return this.todos.reduce((prev, { complete }) => prev + complete, 0);
    },
    ck: {
      get() {
        return this.len === this.todos.length && this.len > 0;
      },
      set(v) {
        this.updTodo(v);
      },
    },
  },
};
</script>

<style scoped></style>
