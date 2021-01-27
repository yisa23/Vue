<template>
  <div>
    <input type="text" @keyup.enter="fn" />
  </div>
</template>

<script>
export default {
  methods: {
    fn(ev) {
      this.$bus.$emit("search", ev.target.value);
    },
  },
};
</script>

<style scoped></style>
