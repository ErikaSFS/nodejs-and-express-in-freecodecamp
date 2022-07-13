let express = require('express');
let app = express();
//console.log("Hello World")

app.use("/public", express.static(__dirname + "/public/"))
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", function (req, res)=> {

  if (process.env.MESSAGE_STYLE === "uppercase") {
      res.json({
        message: "HELLO JSON"
      });
  } else {
      res.json({
        message: "Hello json"
      });
  }
});

function getTheCurrentTimeString(){
  return new Date().toString();
}


app.get("/now", function(req, res, next) {
  req.time = getTheCurrentTimeString();
  next();
}, function(req, res) {
  res.json({time: req.time});
})


app.get("/:word/echo", (req, res) => {
  const {word} = req.params;
  res.json({
    echo: word
  });
});

app.get("/name", function(req, res) {
  res.json({ name: req.query.first + " " + req.query.last});
});


app.post("/name", function(req, res) {
  res.json({ name: req.body.first + " " + req.body.last});
});


































 module.exports = app;
