const express = require("express")
const app = express()

const studentCollection = [
  {
    id: 0,
    name: "Marulam",
    gender: "Male",
    education:"SD",
    age:43
  },
  {
    id: 1,
    name: "Oi",
    gender: "Female",
    education:"SMU",
    age:15
  },
]

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.get("/", (req, res) => {
  res.send(studentCollection)
})

app.listen(3000, () => {
  console.log("API running on localhost:3000")
})
