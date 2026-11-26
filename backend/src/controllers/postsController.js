
// Temporary posts data for our GET endpoints
const posts = [
  {
    id: 1,
    title: 'Welcome to CommunityHub',
    content: 'This is our first community post.',
    author: 'Stacy'
  },
  {
    id: 2,
    title: 'Learning Backend Development',
    content: 'We are building our first API with Express.',
    author: 'Belinda'
  }
];

// GET all posts
const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    count: posts.length,
    data: posts
  });
};

// GET a single post by ID
const getPostById = (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      success: false,
      message: 'Invalid post ID'
    });
  }

  const post = posts.find(post => post.id === id);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: 'Post not found'
    });
  }

  res.status(200).json({
    success: true,
    data: post
  });
};

module.exports = {
  getAllPosts,
  getPostById
};
