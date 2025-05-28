import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4">
      <nav className="flex gap-6 items-center justify-center">
        <Link href="/" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
          About
        </Link>
        <Link href="/product" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
          Product
        </Link>
        <Link href="/contact-us" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
          Contact Us
        </Link>
        <Link href="/login" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
          Login
        </Link>
        <Link href="/sign-up" className="text-lg font-medium text-white bg-blue-600 px-4 py-1.5 rounded hover:bg-blue-700 transition-colors">
          Sign Up
        </Link>
      </nav>
    </header>
  );
}

export default Header;
