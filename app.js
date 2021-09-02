const express = require('express');
const ejs = require('ejs');
const app = express();
app.set('view engine', 'ejs');
const path = require('path');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname,'views/index.html'));
  res.render("index");
});

app.get('/about', function (req, res) {
  res.sendFile(path.resolve(__dirname,'views/about.html'));
  res.render("about");
});
  
app.get('/add', function (req, res) {
  res.sendFile(path.resolve(__dirname,'views/add_post.html'));
  res.render("add_post");
});
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu port ${port}'de başladı`);
});
