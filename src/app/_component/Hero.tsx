'use client';

import { useTextContext } from "@/context/TestContext";
import Link from "next/link";
import React from "react";

function Hero() {
  const { state } = useTextContext();

  return (
    <div className="text-center p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{state}</h1>
      <Link
        href="/product"
        className="text-blue-600 underline hover:text-blue-800 transition"
      >
        Go to product
      </Link>
    </div>
  );
}

export default Hero;
