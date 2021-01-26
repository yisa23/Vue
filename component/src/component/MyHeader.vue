<template>
  <div>
    <input type="text" v-model="title" @keyup.enter="add" />
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
      this.addTodo({
        id: Date.now(),
        title: this.title,
        complete: false,
      });
    },
  },
  props: {
    addTodo: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped></style>
