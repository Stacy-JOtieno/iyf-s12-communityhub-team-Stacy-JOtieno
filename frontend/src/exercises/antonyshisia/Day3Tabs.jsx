import { useState } from "react";
import "./Day3Tabs.css";

export function Tabs({ tabs, label = "Sections" }) {
    const [activeId, setActiveId] = useState(tabs[0]?.id);
    const current = tabs.find((tab) => tab.id === activeId) || tabs[0];

    if (!current) {
        return null;
    }

    return (
        <div>
            <div className="tab-list" role="tablist" aria-label={label}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        className="tab"
                        role="tab"
                        id={`tab-${tab.id}`}
                        aria-selected={tab.id === current.id}
                        aria-controls={`panel-${tab.id}`}
                        onClick={() => setActiveId(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div
                key={current.id}
                className="tab-panel"
                role="tabpanel"
                id={`panel-${current.id}`}
                aria-labelledby={`tab-${current.id}`}
            >
                {current.content}
            </div>
        </div>
    );
}

function Day3Tabs() {
    const tabs = [
        { id: "posts", label: "Posts", content: <p>Posts shared with the community.</p> },
        { id: "events", label: "Events", content: <p>Upcoming cohort events.</p> },
        { id: "about", label: "About", content: <p>CommunityHub is the Season 12 project.</p> }
    ];

    return (
        <section>
            <h1>Day 3: Tabs</h1>
            <Tabs tabs={tabs} label="Community sections" />
        </section>
    );
}

export default Day3Tabs;
