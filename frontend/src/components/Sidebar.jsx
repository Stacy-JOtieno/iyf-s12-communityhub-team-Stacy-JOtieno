function Sidebar() {
    return (
        <aside className="sidebar">
            <section>
                <h3>About</h3>
                <p>CommunityHub is a place to share posts with your community.</p>
            </section>

            <section>
                <h3>Popular Posts</h3>
                <ul>
                    <li>Getting Started with React</li>
                    <li>JavaScript Best Practices</li>
                    <li>Team Project Tips</li>
                </ul>
            </section>

            <section>
                <h3>Tags</h3>
                <ul className="tags">
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                </ul>
            </section>
        </aside>
    );
}

export default Sidebar;