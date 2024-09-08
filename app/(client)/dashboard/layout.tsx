"use client";


import React from 'react';
import Sidebar from './sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};


export default DashboardLayout;
