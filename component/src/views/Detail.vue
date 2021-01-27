<template>
  <div>
    <p>id:{{ $route.params.id }}</p>
    <p>title:{{ detail.title }}</p>
    <p>content:{{ detail.content }}</p>
  </div>
</template>

<script>
const messages = [
  { id: 1, title: "message01", content: "content01" },
  { id: 2, title: "message02", content: "content02" },
  { id: 3, title: "message03", content: "content03" },
];
export default {
  data() {
    return {
      detail: {},
    };
  },
  mounted() {
    this.show(this.$route);
  },
  watch: {
    $route(to) {
      this.show(to);
    },
  },
  methods: {
    show(route) {
      setTimeout(() => {
        this.detail = messages.find((message) => {
          return message.id === route.params.id * 1;
        });
      }, 1000);
    },
  },
};
</script>

<style scoped></style>
