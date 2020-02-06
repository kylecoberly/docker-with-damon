const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const app = express()

app.use(cors())
app.use(morgan("small"))

app.get("/items", (request, response) => {
  response.json({
    items: [{
      label: "Thing 1",
    },{
      label: "Thing 2",
    }]
  })
})

app.listen(process.env.PORT, () => console.log("Hi!"))
