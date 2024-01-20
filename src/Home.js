// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="p-5 bg-gray-800">
        <h1 className="text-4xl font-bold text-purple-500 mb-10">M</h1>
        <nav className="flex flex-col gap-6">
          <Link to="/" className="text-gray-300 hover:text-white">Dashboard</Link>
          <Link to="/heatmap" className="text-gray-300 hover:text-white">Heatmap</Link>
          <Link to="/info" className="text-gray-300 hover:text-white">Info</Link>
          <Link to="/settings" className="text-gray-300 hover:text-white">Settings</Link>
          <Link to="/security" className="text-gray-300 hover:text-white">Security</Link>
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-grow p-5">
        <header className="flex justify-between items-center">
          <span className="text-2xl font-bold text-white">Dashboard</span>
          <button className="text-white bg-purple-600 px-4 py-2 rounded hover:bg-purple-700">Add</button>
        </header>

        <main className="mt-10">
          {/* Content sections for charts and tables */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {/* Chart and Table placeholders */}
            {['Host CPU Utilization', 'Host Disk Space', 'Host VM Memory', 'Active Jobs', 'Failed Jobs'].map((item, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg">
                <h2 className="text-lg text-white font-semibold mb-3">{item}</h2>
                {/* Placeholder for the charts and tables */}
                <div className="h-32 bg-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-gray-300 text-sm">Chart/Table Placeholder</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
