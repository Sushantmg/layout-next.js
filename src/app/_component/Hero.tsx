'use client';

import { useTextContext } from "@/context/TestContext";
import Link from "next/link";
import React from "react";

function Hero() {
  const { state } = useTextContext();

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 text-center p-10 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-extrabold text-blue-900 mb-6">{state}</h1>
      <Link
        href="/product"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
      >
        Go to product
      </Link>
    </div>
  );
}

export default Hero;
