<template>
  <div>
    <input type="text" v-model="title" @keyup.enter="add" />
    <slot>aaa</slot>
    <slot name="s1">bbb</slot>
    <slot name="s2">ccc</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    add() {
      // this.addTodo({
      //   id: Date.now(),
      //   title: this.title,
      //   complete: false,
      // });
      // 分发事件
      this.$emit("addTodo", {
        id: Date.now(),
        title: this.title,
        complete: false,
      });
    },
  },
  // props: {
  //   addTodo: {
  //     type: Function,
  //     required: true,
  //   },
  // },
};
</script>

<style scoped></style>
