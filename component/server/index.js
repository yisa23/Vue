const express = require("express");
const axios = require("axios");

const app = express();

app.get("/search/:q", (req, res) => {
  const q = req.params.q;
  axios({
    method: "GET",
    url: "https://api.github.com/search/repositories",
    params: {
      q,
      sort: "stars",
    },
  }).then((v) => {
    const { name: repoName, html_url: repoUrl } = v.data.items[0];
    res.json({
      repoName,
      repoUrl,
    });
  });
});

app.listen(5000);
