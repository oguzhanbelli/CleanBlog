const express = require('express');
const mongoose = require('mongoose');

const methodOverride = require('method-override');

const ejs = require('ejs');

const app = express();

const postController = require('./controllers/postControllers');
const pageController = require('./controllers/pageControllers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['GET', 'POST'],
  })
);

//DB CONNECT
mongoose.connect('mongodb+srv://oguzhanbelli:meMFkhkBaaDH9Zha@cluster0.l2q1h.mongodb.net/cleanblog-db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("DB CONNECTED!");
}).catch((err) =>{
  console.log(err);
});
//Template Engine
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));

//ROUTES
app.get('/', postController.getPosts);

app.get('/posts/:id', postController.getPost);
app.put('/posts/:id', postController.updatePost);

app.delete('/posts/:id', postController.deletePost);

app.post('/add_post', postController.addPost);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPostPage);


app.get('/posts/edit/:id',pageController.getPostEditPage);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu port ${port}'de başladı`);
});
