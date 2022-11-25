const express = require("express")
const bodyParser = require("body-parser")


const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})



app.post("/", function (req, res) {
    var numberOne = Number(req.body.num1)
    var numberTwo = Number(req.body.num2)
    var total = numberOne + numberTwo
    res.send("Thanks for sending "+ total )
})









app.listen(3000, function () {
    console.log("Server started at 3000 port")
})