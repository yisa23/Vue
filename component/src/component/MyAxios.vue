<template>
  <div>
    <p v-if="!repoUrl">loading</p>
    <p v-else>
      most star repo is <a :href="repoUrl">{{ repoName }}</a>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      repoUrl: "",
      repoName: "",
    };
  },
  mounted() {
    axios
      .get("/api/search/j")
      .then((v) => {
        const { repoName, repoUrl } = v.data;
        this.repoName = repoName;
        this.repoUrl = repoUrl;
      })
      .catch((v) => {
        console.log(v);
      });
  },
};
</script>

<style scoped></style>
