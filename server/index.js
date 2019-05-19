require("dotenv").config();
const express = require("express")
const { SERVER_PORT } = process.env
const Controller = require("./Controller")
const app = express()
app.use(express.json())

app.post(`/api/contact`, Controller.main)


app.listen(SERVER_PORT, () => {
    console.log(`I am listening on ${SERVER_PORT}`)
  })