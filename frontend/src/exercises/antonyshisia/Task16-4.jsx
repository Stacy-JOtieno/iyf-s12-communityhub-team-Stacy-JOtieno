// Task 16.4: Lifting State Up
// frontend/src/exercises/antonyshisia/

import { useState } from "react";

function Stats({ totalPosts, totalLikes }) {
    return (
        <div className="stats">
            <span>{totalPosts} posts</span>
            <span>{totalLikes} total likes</span>
        </div>
    );
}

function PostCard({ post, onLike }) {
    return (
        <div className="post-card">
            <h3>{post.title}</h3>
            <button onClick={onLike}>
                ❤️ {post.likes}
            </button>
        </div>
    );
}

function PostList({ posts, onLike }) {
    return (
        <div className="post-list">
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    post={post}
                    onLike={() => onLike(post.id)}
                />
            ))}
        </div>
    );
}

function Task16_4() {
    const [posts, setPosts] = useState([
        { id: 1, title: "First Post", likes: 0 },
        { id: 2, title: "Second Post", likes: 0 }
    ]);

    const handleLike = (id) => {
        setPosts(posts.map(post =>
            post.id === id
                ? { ...post, likes: post.likes + 1 }
                : post
        ));
    };

    const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

    return (
        <div>
            <h1>Task 16.4: Lifting State Up</h1>
            <Stats totalPosts={posts.length} totalLikes={totalLikes} />
            <PostList posts={posts} onLike={handleLike} />
        </div>
    );
}

export default Task16_4;
