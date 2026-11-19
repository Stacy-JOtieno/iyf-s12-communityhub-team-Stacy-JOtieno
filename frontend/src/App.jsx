
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import CreatePostPage from './pages/CreatePostPage';
import About from './pages/About';

function App() {
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
              <Route path="/create-post" element={<CreatePostPage />} />
              <Route path="/about" element={<About />} />
              <Route
                path="*"
                element={<h1>Sorry, page not found.</h1>}
              />
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
