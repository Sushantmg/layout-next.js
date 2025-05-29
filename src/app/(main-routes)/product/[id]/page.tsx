import React from "react";
import Test from "./_component/Test";
import ButtonForProduct from "./_component/ButtonForProduct";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

async function page({ params }: { params: Promise<{ id: string }> }) {
  const param = await params;
  const res = await fetch("https://fakestoreapi.com/products/" + param.id);
  const data: Product = await res.json();
  console.log("i am in server");

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <Test />
      <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">{data.title}</h1>
        <p className="text-gray-700 mb-6">{data.description}</p>
        <ButtonForProduct>
          <Test />
        </ButtonForProduct>
      </div>
    </div>
  );
}

export default page;
