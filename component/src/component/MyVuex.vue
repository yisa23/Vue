<template>
  <div>
    <p>clicked {{ count }} times, count is {{ evenOrOdd }}</p>
    <button @click="_increment">+</button>
    <button @click="_decrement">-</button>
    <button @click="_incrementIfOdd">increment if odd</button>
    <button @click="_incrementAsync">increment async</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

// function mapState(arr) {
//   const o = {};
//   for (let i = 0; i < arr.length; i++) {
//       const key = arr[i];
//       o[key] = this.$store.state[key]
//   }
//   return o;
// }

export default {
  computed: {
    ...mapState("count", ["count"]),
    ...mapGetters("count", ["evenOrOdd"]),
  },
  methods: {
    ...mapMutations("count", ["increment", "decrement"]),
    ...mapActions("count", ["incrementIfOdd", "incrementAsync"]),
    _increment() {
      this.increment({ amount: 1 });
    },
    _decrement() {
      // this.$store.commit("decrement", { amount: 1 });
      this.decrement({ amount: 1 });
    },
    _incrementIfOdd() {
      this.incrementIfOdd({ amount: 1 });
    },
    _incrementAsync() {
      // this.$store.dispatch("incrementAsync", { amount: 1 });
      this.incrementAsync({ amount: 1 });
    },
  },
  mounted() {
    console.log(this.$store);
  },
};
</script>

<style scoped></style>
