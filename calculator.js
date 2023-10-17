const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
  var height = Number(req.body.Height);
  var weight = Number(req.body.Weight);

  var result = Math.round(weight / (height / 100) ** 2);

  res.render(__dirname + "/result", { result: result });
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.Num1);
  var num2 = Number(req.body.Num2);

  var result = num1 + num2;

  res.render(__dirname + "/result", { result: result });
});

const port = 3000;
app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
