
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

      <main className="main-content">
        <Sidebar />

        <div className="content-area">
          <CreatePost onAddPost={handleAddPost} />
          <PostList posts={posts} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
