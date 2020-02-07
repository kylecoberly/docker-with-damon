const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const knex = require("knex")
const app = express()

const config = require("./knexfile")["development"]
const database = knex(config)
morgan("small")

app.use(cors())

app.get("/items", (request, response) => {
  database("item").select()
    .then(items => {
      response.json({ items })
    })
})

app.listen(process.env.PORT, () => console.log("Hi!"))
