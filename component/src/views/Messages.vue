<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <!-- <router-link :to="`/bar/messages/detail/${message.id}?test=hello`"> -->
        <router-link
          :to="{
            name: 'detail',
            params: { id: message.id },
            query: { test: 'hello' },
          }"
        >
          {{ message.title }}
        </router-link>
        <button @click="push(message.id)">push</button>
        <button @click="replace(message.id)">replace</button>
      </li>
    </ul>
    <!-- <router-view /> -->
    <router-view msg="msg" />
    <button @click="$router.back()">back</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.messages = [
        { id: 1, title: "message01" },
        { id: 2, title: "message02" },
        { id: 3, title: "message03" },
      ];
    }, 1000);
  },
  methods: {
    replace(id) {
      this.$router.replace(`/bar/messages/detail/${id}?test=hello`);
    },
    push(id) {
      this.$router.push({
        name: "detail",
        params: { id: id },
        query: { test: "hello" },
      });
    },
  },
};
</script>

<style scoped></style>
