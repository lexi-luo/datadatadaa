const path = require('path')
const express = require('express')
const request = require('superagent')
const server = express()

const apiEndpointBase = "https://epic.gsfc.nasa.gov/api/natural/"

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get("/v1/pictures", (req, res) => {
  // res.send("hiya ????")
  request.get(apiEndpointBase + 'pictures')
  .then(ApiRes => {
    res.json(ApiRes.body)
  })
})

// server.get("/v1/natural/:id", (req, res) => {
//   let thisID = req.params.id
//   console.log(thisID)
//   request.get("https://epic.gsfc.nasa.gov/api/natural/" + thisID)
//   .then(ApiRes => {
//     res.json(ApiRes.body)
//   })
// })


module.exports = server
