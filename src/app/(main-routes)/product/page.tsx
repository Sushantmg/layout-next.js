import Link from "next/link";
import React from "react";

async function page() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: { title: string; id: number }[] = await res.json();

  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });

  return (
    <div className="min-h-screen bg-blue-50 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item, index) => (
        <Link href={`/product/${item.id}`} key={index}>
          <div className="border border-blue-200 bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-300 cursor-pointer">
            <h2 className="text-blue-900 font-semibold text-lg">{item.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default page;
