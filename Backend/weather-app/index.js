import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
    const data = response.data;

    let jokeText = "";

    if (data.type === "single") {
      jokeText = data.joke;
    } else {
      jokeText = `${data.setup} — ${data.delivery}`;
    }

    res.render("index.ejs", { joke: jokeText });
  } catch (error) {
    console.log(error);
    res.render("index.ejs", { joke: "Failed to fetch joke 😢" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
