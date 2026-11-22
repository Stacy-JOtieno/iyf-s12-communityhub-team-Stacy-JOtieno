function Sidebar() {
    return (
        <aside className="sidebar">
            <h2>Categories</h2>
            <nav aria-label="Categories">
                <ul>
                    <li><a href="#feed">General</a></li>
                    <li><a href="#feed">Announcements</a></li>
                    <li><a href="#feed">Tech &amp; Coding</a></li>
                    <li><a href="#feed">Events</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;