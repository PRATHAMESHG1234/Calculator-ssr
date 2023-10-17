const express = require("express");
const bodyParser = require("body-parser");
const fs = require("file-system")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/bmiCalculator",function (req,res) {
    res.sendFile(__dirname+"/bmiCalculator.html")
})


app.post("/bmiCalculator",function (req,res) {
    var height = Number(req.body.Height);
    var weight = Number(req.body.Weight);

    var result = Math.round(weight / ((height/100)**2));
    res.send("the calculated result is "+ result);
})
app.get("/",function (req,res) {
    res.sendFile(__dirname +"/index.html")
})


app.post("/",function (req,res) {
    var num1 = Number(req.body.Num1);
    var num2 = Number(req.body.Num2);

    var result = num1 + num2;
    res.send("the calculated result is "+ result);
})


const port =  3000;
app.listen(port,function () {
    console.log(`server listening on port ${port}`)  
});
