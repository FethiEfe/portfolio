require("dotenv").config();
const express = require("express")
const { SERVER_PORT } = process.env
const Controller = require("./Controller")
const path = require('path'); 
const app = express()
app.use(express.json())
app.use( express.static( `${__dirname}/../build` ) );

app.post(`/api/contact`, Controller.main)

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});
app.listen(SERVER_PORT, () => {
    console.log(`I am listening on ${SERVER_PORT}`)
  })