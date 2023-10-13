import React from 'react';

import Navbar from '../components/Navbars/dashboard';
import Footer from '../components/Footers/dashboard';

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className={`flex flex-col lg:flex-row h-screen pt-20 lg:pt-0`}>
        <Navbar />
        <div className="bg-slate-100 w-full h-full overflow-y-auto">
          <div className="flex flex-col mx-auto h-full container">
            <div className="p-4 lg:p-16 w-full">{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
