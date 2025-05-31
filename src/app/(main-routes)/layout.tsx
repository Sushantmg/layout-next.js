import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6 bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
