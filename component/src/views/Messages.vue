<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="`/bar/messages/detail/${message.id}?test=hello`">
          {{ message.title }}
        </router-link>
      </li>
    </ul>
    <router-view />
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
};
</script>

<style scoped></style>
