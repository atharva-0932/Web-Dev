import express from "express";

const app = express();
const port = 3000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// TEMP storage (no DB)
let posts = [];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { posts });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/new", (req, res) => {
  const { title, content } = req.body;
  posts.push({ title, content });
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const post = posts[req.params.id];
  res.render("edit", { post, id: req.params.id });
});

app.post("/edit/:id", (req, res) => {
  posts[req.params.id] = req.body;
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  posts.splice(req.params.id, 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
