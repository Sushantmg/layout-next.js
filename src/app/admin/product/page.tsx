import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

const dummyProducts: Product[] = [
  {
    id: 1,
    name: "MacBook Pro",
    price: 1999,
    category: "Electronics",
    image:
      "https://i.ebayimg.com/images/g/EGUAAOSwSWhjxdjA/s-l1200.jpg",
  },
  {
    id: 2,
    name: "Nike Air Max",
    price: 149,
    category: "Footwear",
    image:
      "https://www.urbanathletics.com.ph/cdn/shop/files/AURORA_FZ5486-100_PHSRH000-2000.png?v=1732672750",
  },
  {
    id: 3,
    name: "Coffee Mug",
    price: 12.5,
    category: "Kitchenware",
    image:
      "https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg",
  },
];

function ProductPage() {
  return (
    <div className="p-6 w-full max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Products</h1>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-blue-100 text-blue-800">
            <th className="border-b border-blue-300 p-3">Image</th>
            <th className="border-b border-blue-300 p-3">Name</th>
            <th className="border-b border-blue-300 p-3">Price</th>
            <th className="border-b border-blue-300 p-3">Category</th>
          </tr>
        </thead>
        <tbody>
          {dummyProducts.map((product) => (
            <tr
              key={product.id}
              className="hover:bg-blue-50 transition-colors duration-200"
            >
              <td className="border-b border-blue-200 p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-lg shadow-sm"
                />
              </td>
              <td className="border-b border-blue-200 p-3 font-semibold text-blue-900">
                {product.name}
              </td>
              <td className="border-b border-blue-200 p-3 text-blue-800">
                ${product.price}
              </td>
              <td className="border-b border-blue-200 p-3 text-blue-700">
                {product.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductPage;
