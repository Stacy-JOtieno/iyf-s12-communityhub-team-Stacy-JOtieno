import { useState } from 'react';

// Parent component holds the state
function LikesApp() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'First Post', likes: 0 },
        { id: 2, title: 'Second Post', likes: 0 }
    ]);

    const handleLike = (id) => {
        setPosts(
            posts.map((post) =>
                post.id === id
                    ? { ...post, likes: post.likes + 1 }
                    : post
            )
        );
    };

    const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

    return (
        <div>
            <h3>Lifting State Up</h3>
            <Stats totalPosts={posts.length} totalLikes={totalLikes} />
            <PostList posts={posts} onLike={handleLike} />
        </div>
    );
}

// Child receives data via props
function Stats({ totalPosts, totalLikes }) {
    return (
        <div className="stats">
            <span>{totalPosts} posts</span>
            {' · '}
            <span>{totalLikes} total likes</span>
        </div>
    );
}

// Child receives data and a callback
function PostList({ posts, onLike }) {
    return (
        <div className="post-list">
            {posts.map((post) => (
                <LikeablePostCard
                    key={post.id}
                    post={post}
                    onLike={() => onLike(post.id)}
                />
            ))}
        </div>
    );
}

function LikeablePostCard({ post, onLike }) {
    return (
        <div className="post-card">
            <h3>{post.title}</h3>
            <button onClick={onLike}>❤️ {post.likes}</button>
        </div>
    );
}

export default LikesApp;