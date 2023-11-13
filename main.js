const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = 5500;

let data = [
    {id:1, name:"John", age:24},
    {id:2, name:"Jane", age:36},
    {id:3, name:"Mike", age:48},
    {id:4, name:"Josh", age:31},
    {id:5, name:"Zara", age:27}
];

app.get("/", (req, res) => {
    res.json(data);
});

app.post("/", (req, res) => {
    data.push(req.body);
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});
