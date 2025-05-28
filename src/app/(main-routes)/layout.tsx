
import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
}

export default layout;