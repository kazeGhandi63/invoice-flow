import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-800">Invoice Flow</h1>
        </div>
        <nav className="mt-8 px-4 space-y-2">
          {["Dashboard", "Clientes", "Faturas"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`w-full text-left px-4 py-3 rounded-lg ${
                activeTab === tab.toLowerCase() 
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700" 
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{activeTab}</h1>
        <p>GUI funcionando.</p>
      </main>
    </div>
  );
}

export default App;