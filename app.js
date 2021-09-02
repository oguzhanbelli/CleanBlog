const express = require('express');
const ejs = require('ejs');
const app = express();
//Template Engine
app.set('view engine', 'ejs');
const path = require('path');
//MIDDLEWARES
app.use(express.static('public'));


//ROUTES
app.get('/', function (req, res) {

  res.render("index");
});

app.get('/about', function (req, res) {
  
  res.render("about");
});

app.get('/add', function (req, res) {
  
  res.render("add_post");
});
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu port ${port}'de başladı`);
});
