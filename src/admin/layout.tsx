import React from "react";
import Sidebar from "./_components/Sidebar";


function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar/>
      {children}
    </div>
  );
}

export default layout;