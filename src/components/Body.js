import React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar';
import Head from './Head';

const Body = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Head /> 
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex flex-1 overflow-x-hidden overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Body;
