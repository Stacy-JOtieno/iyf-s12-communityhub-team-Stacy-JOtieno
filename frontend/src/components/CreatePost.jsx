
import { useState } from 'react';

function CreatePost({ onAddPost, author = 'Community Member' }) {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !excerpt.trim()) {
      return;
    }

    const newPost = {
      id: Date.now(),
      title: title.trim(),
      excerpt: excerpt.trim(),
      author,
      date: new Date().toLocaleDateString(),
      createdAt: new Date().toISOString(),
      likes: 0,
      liked: false,
    };

    onAddPost(newPost);

    setTitle('');
    setExcerpt('');
  }

  return (
    <form onSubmit={handleSubmit} className="create-post">
      <h2>Create a Post</h2>

      <label htmlFor="post-title">Post Title</label>
      <input
        id="post-title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Give your post a title"
        required
      />

      <label htmlFor="post-content">What's on your mind?</label>
      <textarea
        id="post-content"
        value={excerpt}
        onChange={(event) => setExcerpt(event.target.value)}
        placeholder="Share something with your community..."
        required
      />

      <button type="submit">Publish Post</button>
    </form>
  );
}

export default CreatePost;
