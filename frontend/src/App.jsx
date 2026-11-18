
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Button from './components/Button';

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
      </div>

      <Footer />
    </div>
  );
}

export default App;
