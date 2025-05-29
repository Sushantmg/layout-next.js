"use client";
import { useTextContext } from '@/context/TestContext';
import React from "react";

function ButtonForProduct({ children }: { children: React.ReactNode }) {
  const { state, setState } = useTextContext();

  return (
    <button
      onClick={() => {
        if (setState) setState("hello to you too");
      }}
      className="bg-blue-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-blue-700 transition duration-300 flex items-center gap-2"
    >
      <span className="font-medium">{state}</span>
      {children}
    </button>
  );
}

export default ButtonForProduct;
