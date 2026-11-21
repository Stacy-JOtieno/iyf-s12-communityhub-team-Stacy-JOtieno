import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { sortNewestFirst } from './utils/posts';

const starterPosts = [
  {
    id: 1,
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React components and JSX.',
    author: 'Amina Otieno',
    date: 'Jan 15, 2026',
    createdAt: '2026-01-15T09:00:00.000Z',
    likes: 2,
    liked: false,
  },
  {
    id: 2,
    title: 'JavaScript Best Practices',
    excerpt: 'Write cleaner code by keeping data and markup apart.',
    author: 'Brian Kamau',
    date: 'Jan 10, 2026',
    createdAt: '2026-01-10T09:00:00.000Z',
    likes: 1,
    liked: false,
  },
];

function App() {
  const [posts, setPosts] = useState(starterPosts);

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

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <Sidebar />

        <div className="posts-section">
          <CreatePost onAddPost={handleAddPost} />
          <PostList
            posts={sortNewestFirst(posts)}
            onLike={handleLike}
            onDelete={handleDelete}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
