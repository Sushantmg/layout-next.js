import React from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string; // 🖼️ Added image field
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
      "	https://www.urbanathletics.com.ph/cdn/shop/files/AURORA_FZ5486-100_PHSRH000-2000.png?v=1732672750",
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
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">Image</th>
            <th className="border-b p-2">Name</th>
            <th className="border-b p-2">Price</th>
            <th className="border-b p-2">Category</th>
          </tr>
        </thead>
        <tbody>
          {dummyProducts.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100">
              <td className="border-b p-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="border-b p-2">{product.name}</td>
              <td className="border-b p-2">${product.price}</td>
              <td className="border-b p-2">{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductPage;
