import Header from './components/Header';
import Footer from './components/Footer';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';
import Button from './components/Button';

import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([]);

  function handleAddPost(newPost) {
    setPosts((previousPosts) => [newPost, ...previousPosts]);
  }

  return (
    <div className="app">
      <Header />

      <div className="main-layout">
        <main>
          <h2>Welcome to CommunityHub</h2>

          <PostCard />
          <PostCard />

          <Button />
        </main>

        <Sidebar />
      </div>
      <main className="main-content">
        <Sidebar />

        <div className="posts-section">
          <CreatePost onAddPost={handleAddPost} />
          <PostList posts={posts} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
