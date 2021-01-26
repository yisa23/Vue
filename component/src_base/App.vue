<template>
  <div>
    <h1 v-text="msg"></h1>
    <hello-vue />
  </div>
</template>

<script>
import HelloVue from "@/component/HelloVue";

export default {
  data() {
    return {
      msg: "Hello",
    };
  },
  components: {
    HelloVue,
  },
};
</script>

<style scoped>
h1 {
  color: blueviolet;
}
</style>
