<template>
  <div>
    <!-- <p>id:{{ $route.params.id }}</p> -->
    <p>id:{{ id }}</p>
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
  // props: ["id"],
  // props: ["id", "test"],
  props: ["id", "test", "msg"],
  data() {
    return {
      detail: {},
    };
  },
  mounted() {
    // this.show(this.$route);
    this.show(this.id);
  },
  watch: {
    // $route(to) {
    //   this.show(to);
    // },
    id(id) {
      this.show(id);
    },
  },
  methods: {
    // show(route) {
    //   setTimeout(() => {
    //     this.detail = messages.find((message) => {
    //       return message.id === route.params.id * 1;
    //     });
    //   }, 1000);
    // },
    show(id) {
      setTimeout(() => {
        this.detail = messages.find((message) => {
          return message.id === id * 1;
        });
      }, 1000);
    },
  },
};
</script>

<style scoped></style>
