import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const { PORT, DATABASE_URL } = process.env;

const pool = new pg.Pool({
  connectionString: DATABASE_URL,
});

await pool.connect();

const app = express();

app.use(express.json());

app.get("/api/user/:userName", (req, res) => {
  let user = req.params.userName;

  pool.query("SELECT * FROM userInfo WHERE username = $1;", [user])
    .then((result) => { res.status(200).json(result.rows) })
    .catch((error) => { res.status(404).send(error); })
});
app.get("/api/char/:id", (req, res) => {
  let id = req.params.id;

  pool.query("SELECT * FROM characterData WHERE user_id = $1;", [id])
  .then((result) => { res.status(200).json(result.rows); })
  .catch((error) => { res.status(404).send(error); })
})

app.post("/api/user", (req, res) => {
  let {username, password} = req.body;
  pool.query("INSERT INTO userinfo(username, password) VALUES($1, $2);", [username, password])
  .then((result) => { res.status(201).send('created'); })
  .catch((err) => { res.status(500).send('didnt work') })
})
app.post("/api/char", (req, res) => {
  let {hp, items, userposition, hasbeen, user_id} = req.body;
  pool.query("INSERT INTO userinfo(username, password) VALUES($1, $2);", [username, password])
  .then((result) => { res.status(201).send('created'); })
  .catch((err) => { res.status(500).send('didnt work') })
})

// app.update("/api/char/:id", (req, res) => {
//   let {hp, items, userposition, hasbeen} = req.body;
// })

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
