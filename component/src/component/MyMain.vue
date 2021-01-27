<template>
  <div>
    <h2 v-if="init">search something</h2>
    <h2 v-else-if="loading">loading</h2>
    <h2 v-else-if="error">{{ error }}</h2>
    <ul v-else>
      <li v-for="(user, index) in users" :key="index">
        <a :href="user.url">
          <img :src="user.avatar" alt="" />
        </a>
        <p>{{ user.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      init: true,
      loading: false,
      users: [],
      error: "",
    };
  },
  mounted() {
    this.$bus.$on("search", async (q) => {
      this.init = false;
      this.loading = true;
      try {
        const v = await axios.get("https://api.github.com/search/users", {
          params: {
            q,
          },
        });
        this.loading = false;
        this.users = v.data.items.map((item) => ({
          url: item.html_url,
          avatar: item.avatar_url,
          name: item.login,
        }));
      } catch (error) {
        this.loading = false;
        this.error = error.message;
      }
    });
  },
};
</script>

<style scoped></style>
