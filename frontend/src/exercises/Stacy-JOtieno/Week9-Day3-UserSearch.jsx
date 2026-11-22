
import { useState } from 'react';

function Tabs({ tabs, initialTab }) {
  const [activeTab, setActiveTab] = useState(
    initialTab || tabs[0]?.id
  );

  const selectedTab = tabs.find(
    tab => tab.id === activeTab
  );

  if (!tabs || tabs.length === 0) {
    return <p>No tabs available.</p>;
  }

  return (
    <div className="w-full">

      {/* Tab headers */}
      <div
        role="tablist"
        aria-label="Content sections"
        className="flex border-b gap-4"
      >
        {tabs.map(tab => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            disabled={tab.disabled}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-3 font-medium transition-all duration-300
              ${activeTab === tab.id
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-blue-500'
              }
              disabled:opacity-40
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active tab content */}
      <div
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="p-5 animate-fade-in"
      >
        {selectedTab?.content}
      </div>

    </div>
  );
}

export default Tabs;
