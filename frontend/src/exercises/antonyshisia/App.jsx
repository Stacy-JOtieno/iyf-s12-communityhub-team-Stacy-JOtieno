import "./exercise.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostCard from "./components/PostCard";
import Sidebar from "./components/Sidebar";
import Button from "./components/Button";

function App() {
    return (
        <div className="exercise-15-2 app">
            <Header />

            <div className="layout">
                <main>
                    <h2>Welcome to CommunityHub</h2>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <div className="actions">
                        <Button />
                    </div>
                </main>

                <Sidebar />
            </div>

            <Footer />
        </div>
    );
}

export default App;