
import React from 'react';
import { CalendarClock } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarClock className="h-8 w-8 text-dashboard-teal" />
          <div>
            <h1 className="text-xl font-bold text-gray-900">Smart Calendar</h1>
            <p className="text-sm text-gray-500">Project Dashboard</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-900">May 20, 2025</p>
          <p className="text-xs text-gray-500">Project Management Team</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
