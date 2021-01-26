<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "HelloVue",
    };
  },
};
</script>

<style scoped>
p {
  color: cadetblue;
}
</style>
