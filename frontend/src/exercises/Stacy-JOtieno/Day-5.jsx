import './PageLayout.css';

function PageLayout({ children, sidebar }) {
    return (
        <div className="layout">
            <header className="layout-header">
                <h2>CommunityHub</h2>
            </header>

            <div className="layout-body">
                <main className="layout-main">{children}</main>
                {sidebar && <aside className="layout-sidebar">{sidebar}</aside>}
            </div>

            <footer className="layout-footer">
                <p>&copy; 2026 CommunityHub. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default PageLayout;