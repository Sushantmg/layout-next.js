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
    <div>
      <Test/>
      {data.title}
      <div>{data.description}</div>
      <ButtonForProduct>
        <Test />
        </ButtonForProduct>
      
    </div>
  );
}

export default page;