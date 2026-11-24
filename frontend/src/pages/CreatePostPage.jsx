
import { useState } from 'react';
import CreatePost from '../components/CreatePost';

function CreatePostPage() {
  const [createdPosts, setCreatedPosts] = useState([]);

  function handleAddPost(newPost) {
    const postWithId = {
      ...newPost,
      id: Date.now(),
    };

    setCreatedPosts((previousPosts) => [
      postWithId,
      ...previousPosts,
    ]);
  }

  return (
    <section className="create-post-page">
      <h1>Create a Community Post</h1>

      <CreatePost onAddPost={handleAddPost} />

      {createdPosts.length > 0 && (
        <section>
          <h2>Your Published Posts</h2>

          {createdPosts.map((post) => (
            <article key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <small>{post.author} · {post.date}</small>
            </article>
          ))}
        </section>
      )}
    </section>
  );
}

export default CreatePostPage;
