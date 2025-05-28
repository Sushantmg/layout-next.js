import Link from "next/link";
import React from "react";

async function page() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: { title: string; id: number }[] = await res.json();
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  return (
    <div>
      {data.map((item, index) => (
        <Link href={"/product/" + item.id} key={index}>
          <div key={index} className="border m-3">
            {item.title}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default page;