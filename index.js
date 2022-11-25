const { PORT, GIPHY_KEY } = process.env;

const express = require("express");
const giphy = require("giphy-api")(GIPHY_KEY);

const app = express();

app.get("/api/giphy", async (req, res) => {
  const query = req.query.query;

  giphy.search(
    {
      q: query,
      limit: 9,
    },
    function (err, result) {
      console.log(result);
      res.send(result?.data ?? []);
    }
  );
});

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));
