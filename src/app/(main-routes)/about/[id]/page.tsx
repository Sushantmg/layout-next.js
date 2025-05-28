import React from "react";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const paramData = await params;
  const res = await fetch("https://fakestoreapi.com/products");
  const data: { title: string }[] = await res.json();
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="border m-3">
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default page;