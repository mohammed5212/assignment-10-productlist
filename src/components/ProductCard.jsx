import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-500 mb-2">{product.category}</p>
        <p className="text-blue-600 font-semibold">₹{product.price}</p>
      </div>
    </div>
  );
}