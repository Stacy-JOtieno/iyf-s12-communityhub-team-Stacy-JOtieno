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
    <div className="app">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />

      <main id="main" className="main-content">
        <Sidebar />

          <CreatePost onAddPost={handleAddPost} />
          <PostList posts={posts} />
          <p id="about">
            CommunityHub is the Season 12 space for sharing posts with the cohort.
          </p>
        </div>
      </main>

      <div id="about">
        <Footer />
      </div>
    </div>
  );
}

export default App;
