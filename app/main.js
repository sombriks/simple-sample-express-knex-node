const env = process.env.NODE_ENV || "development";
const cfg = require("../knexfile");
const knex = require("knex")(cfg[env]);

const express = require("express");
const app = express();
const { json } = require("body-parser");

app.use(json());

app.get("/", (req, res) => {
  let data = new Date();
  knex("visita")
    .insert({ data })
    .then((_) => res.send("visitado em " + data))
    .catch((e) => res.status(500).send(e));
  console.log(data);
});

app.get("/visitas", async (req, res) => {
  const visitas = await knex("visita").select();
  res.send(visitas);
});

knex.migrate.latest().then((_) => {
  app.listen(3000);
  console.log("http://0.0.0.0:3000");
});
