const Post = require('../models/Post');
const moment = require('moment');
exports.getPosts = async (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  const posts = await Post.find({});

  res.render('index', {
    posts,
    moment: moment,
  });
};
exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  res.render('post', {
    post,
    moment: moment,
  });
};

exports.updatePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;

  post.save();

  res.redirect(`/posts/${req.params.id}`);
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndRemove({ _id: req.params.id });

  res.redirect(`/`);
};
exports.addPost = function (req, res) {
  Post.create(req.body);

  res.redirect('/');
};
