// Shared in-memory posts store for all GET and CRUD endpoints.
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

const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    count: posts.length,
    data: posts
  });
};

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

  return res.status(200).json({
    success: true,
    data: post
  });
};

const createPost = (req, res) => {
  const { title, content, author } = req.body || {};

  if (
    typeof title !== 'string' || !title.trim() ||
    typeof content !== 'string' || !content.trim()
  ) {
    return res.status(400).json({
      success: false,
      message: 'Title and content are required'
    });
  }

  const newPost = {
    id: posts.length ? Math.max(...posts.map(post => post.id)) + 1 : 1,
    title: title.trim(),
    content: content.trim(),
    author: typeof author === 'string' && author.trim() ? author.trim() : 'Anonymous',
    createdAt: new Date().toISOString()
  };

  posts.push(newPost);

  return res.status(201).json({
    success: true,
    message: 'Post created successfully',
    data: newPost
  });
};

const updatePost = (req, res) => {
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

  const { title, content, author } = req.body || {};
  const hasUpdate =
    title !== undefined || content !== undefined || author !== undefined;

  if (!hasUpdate) {
    return res.status(400).json({
      success: false,
      message: 'Provide at least one field to update'
    });
  }

  if (title !== undefined) {
    if (typeof title !== 'string' || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Title must be a non-empty string'
      });
    }
    post.title = title.trim();
  }

  if (content !== undefined) {
    if (typeof content !== 'string' || !content.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Content must be a non-empty string'
      });
    }
    post.content = content.trim();
  }

  if (author !== undefined) {
    if (typeof author !== 'string' || !author.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Author must be a non-empty string'
      });
    }
    post.author = author.trim();
  }

  post.updatedAt = new Date().toISOString();

  return res.status(200).json({
    success: true,
    message: 'Post updated successfully',
    data: post
  });
};

const deletePost = (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      success: false,
      message: 'Invalid post ID'
    });
  }

  const postIndex = posts.findIndex(post => post.id === id);

  if (postIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Post not found'
    });
  }

  const [deletedPost] = posts.splice(postIndex, 1);

  return res.status(200).json({
    success: true,
    message: 'Post deleted successfully',
    data: deletedPost
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
