<template>
  <div>
    <h1 v-text="msg"></h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello",
    };
  },
};
</script>

<style scoped>
h1 {
  color: blueviolet;
}
</style>
