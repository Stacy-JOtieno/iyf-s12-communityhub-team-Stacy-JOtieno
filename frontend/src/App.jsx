import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  function handleAddPost(newPost) {
    setPosts((previousPosts) => sortNewestFirst([newPost, ...previousPosts]));
  }

  function handleLike(id) {
    setPosts((previousPosts) =>
      previousPosts.map((post) => {
        if (post.id !== id) {
          return post;
        }

        const liked = !post.liked;
        return {
          ...post,
          liked,
          likes: post.likes + (liked ? 1 : -1),
        };
      })
    );
  }

  function handleDelete(id) {
    setPosts((previousPosts) => previousPosts.filter((post) => post.id !== id));
  }

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter(
          (post) =>
            post.category?.toLowerCase() ===
            selectedCategory.toLowerCase()
        );

  return (
    <div className="app" id="home">
      <Header />

      <main className="main-content">
        <section className="posts-section" id="posts">
          <h2>Community Posts</h2>

          <CreatePost onAddPost={handleAddPost} />

          <div className="category-filters">
            {[
              'All',
              'General',
              'Announcements',
              'Tech & Coding',
              'Events',
            ].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category ? 'active' : ''
                }
              >
                {category}
              </button>
            ))}
          </div>

          <div className="posts-list">
            {filteredPosts.length === 0 ? (
              <p>No posts in this category yet.</p>
            ) : (
              filteredPosts.map((post, index) => (
                <article
                  className="post-card"
                  key={post.id || index}
                >
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <small>
                    By {post.author || 'Community Member'}
                  </small>
                </article>
              ))
            )}
          </div>
        </section>

        <Sidebar />
      </main>

      <div id="about">
        <Footer />
      </div>
    </div>
  );
}

export default App;
