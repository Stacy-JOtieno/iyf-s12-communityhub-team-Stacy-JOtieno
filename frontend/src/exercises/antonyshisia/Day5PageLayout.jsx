// Day 5: Layout component
// frontend/src/exercises/antonyshisia/

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Day5PageLayout.css";

function PageLayout({ children, sidebar }) {
    return (
        <div className="page-layout">
            <Header />
            <div className="page-body">
                {sidebar && <aside className="page-sidebar">{sidebar}</aside>}
                <main className="page-main">{children}</main>
            </div>
            <Footer />
        </div>
    );
}

function Day5PageLayout() {
    return (
        <div className="day-5">
            <PageLayout
                sidebar={
                    <div>
                        <h2>About</h2>
                        <p>CommunityHub is a team project for Week 8.</p>
                    </div>
                }
            >
                <h1>Day 5: Page Layout</h1>
                <p>This page includes a header, an optional sidebar, and a footer.</p>
            </PageLayout>
        </div>
    );
}

export default Day5PageLayout;
