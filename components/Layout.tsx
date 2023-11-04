import React from 'react';

import FollowBar from "@/components/layout/FollowBar"
import Sidebar from "@/components/layout/Sidebar"
import Dawaha from './layout/Dawaha';


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-full bg-[#dadada]">
      <Dawaha />
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div 
            className="
              col-span-3 
              lg:col-span-2 
         
    
          ">
            {children}
          </div>
          <FollowBar />
        </div>
     </div>
    </div>
  )
}

export default Layout;
