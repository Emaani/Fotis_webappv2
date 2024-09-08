import React from 'react';
import { BiUser, BiCog, BiMenu, BiHome, BiLineChart } from 'react-icons/bi';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4 shadow-md">
      <ul className="space-y-4">
        <li><Link href="/dashboard" className="flex items-center"><BiHome className="mr-2" />Dashboard</Link></li>
        <li><Link href="/dashboard/commodities" className="flex items-center"><BiLineChart className="mr-2" />Commodities</Link></li>
        <li><Link href="/dashboard/livestock" className="flex items-center"><BiLineChart className="mr-2" />Livestock</Link></li>
        <li><Link href="/dashboard/analytics" className="flex items-center"><BiCog className="mr-2" />Analytics</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
