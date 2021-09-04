const moment = require('moment');
const Post = require('../models/Post');

exports.getAboutPage = function (req, res) {
  res.render('about');
};

exports.getAddPostPage = function (req, res) {
  res.render('add_post');
};

exports.getPostEditPage = async (req, res) => {
  const post = await Post.findById(req.params.id);

  res.render('edit', {
    post,
    moment: moment,
  });
};
