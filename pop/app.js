let exp = require("express");
let mongoose = require("mongoose");

let app = exp();

// adding middle ware
app.use(exp.json());

// data base connecting using mongoose
mongoose.connect("mongodb://localhost:27017/friday").then(function (con) {
  console.log("db connected...");
});

// creating blueprint
let studentBluePrint = new mongoose.Schema({
  name: String,
  roll: Number,
  dept: String,
});

// create collection
let studentModel = mongoose.model("stu", studentBluePrint);

/*
  C -> post
  R -> get
  U -> patch/update
  D -> delete
*/

// get request
app.get("/helo", function (req, res) {
  res.status(404);
  res.send(`<h1>hellasdo</h1>`);
});

app.get("/", function (req, res) {
  res.send(`<h1>nothing</h1>`);
});

app.get("/json", function (req, res) {
  res.json({
    status: "success",
    obj: 78,
  });
});

// posting --> creating
app.post("/student/post", function (req, res) {
  // res.json(req.body);
  // console.log(req.body, "-----");
  studentModel.create(req.body).then(function (obj) {
    console.log(obj);
    res.json(obj);
  });
});
app.post("/student/postnew", async function (req, res) {
  // res.json(req.body);
  // console.log(req.body, "-----");
  let savedDoc = await studentModel.create(req.body);
  res.json(savedDoc);
  console.log(savedDoc);
});

app.get("/student/all", async function (req, res) {
  let stus = await studentModel.find();
  console.log(stus, "---");

  res.json(stus);
});
app.get("/student/:name/:roll", async function (req, res) {
  console.log(req.params);
  let stus = await studentModel.find({ name: req.params.name });
  console.log(stus, "---");
  res.json(stus);
});

app.put("/student/update/:name", 
        function(req, res)
        {
            studentModel.find
        }
)

app.listen(7000, function () {
  console.log("server is active in 7000...");
});
