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

app.get("/api/user", (req, res) => {
  pool.query("SELECT * FROM userInfo WHERE id = 1;")
    .then((result) => { res.status(200).json(result.rows) })
    .catch((error) => { res.status(404).send(error); })
});
app.get("/api/char/:id", (req, res) => {
  let id = req.params.id;

  pool.query("SELECT * FROM characterData WHERE user_id = $1;", [id])
  .then((result) => { res.status(200).json(result.rows); })
  .catch((error) => { res.status(404).send(error); })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
