import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex gap-5">
      <Link href={"/"} className="text-lg">
        Home
      </Link>
       <Link href={"/about"} className="text-lg">
        about
      </Link>
      <Link href={"/product"} className="text-lg">
        Product
      </Link>
      <Link href={"/contact-us"} className="text-lg">
        Contact Us
      </Link>
      
    </div>
  );
}

export default Header;