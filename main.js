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

const iGuessItDoesTheThing = (req, res, next) => {
    console.log('Thing Works');
    next();
};

const itDoesDoThing = (req, res, next) => {
    console.log('Thing Works Well!');
    next();
};

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
};


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(iGuessItDoesTheThing);
app.use(itDoesDoThing);

// Routes
// const usersRouter = require('./routes/users');
// const postsRouter = require('./routes/posts');
// const commentsRouter = require('./routes/comments');

// app.use('/users', usersRouter);
// app.use('/posts', postsRouter);
// app.use('/comments', commentsRouter);

app.use(errorHandler);


app.use(express.static('KinneySBA318'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.get('/', (req, res) => {
    res.render('index');
    res.json(data);
});

app.post('/', (req, res) => {
    data.push(req.body);
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});