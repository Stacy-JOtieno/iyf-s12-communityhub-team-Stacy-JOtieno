import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import CreatePostPage from "./pages/CreatePostPage";
import About from "./pages/About";

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
    <BrowserRouter>
      <div className="app">
        <Header />

        <div className="main-content">
          <Sidebar />

          <main className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:id" element={<PostDetail />} />
              <Route path="/create" element={<CreatePostPage />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<h1>Sorry, page not found.</h1>} />
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;