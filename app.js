const express = require('express');
const mongoose = require('mongoose');
const moment = require("moment")

const ejs = require('ejs');
const path = require('path');
const Post = require('./models/Post');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//DB CONNECT
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//Template Engine
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));

//ROUTES
app.get('/', async(req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  const posts = await Post.find({});


  res.render('index', {
    posts,
    moment:moment
  });
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/add', function (req, res) {
  res.render('add_post');
});

app.post('/add_post', function (req, res) {
  Post.create(req.body);

  res.redirect("/");
});
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu port ${port}'de başladı`);
});
