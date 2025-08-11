import React from 'react';
import CategoryFilter from './components/CategoryFilter.jsx';
import ProductList from './components/ProductList.jsx';
import productsData from './data/products.json';

export default function App() {
  const [category, setCategory] = React.useState('All'); 
  const categories = ['All', ...new Set(productsData.map(p => p.category))];
  const filteredProducts = category === 'All'
    ? productsData
    : productsData.filter(product => product.category === category);

  return (
    <div className="p-4 min-h-screen bg-blue-100">
      <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
      <CategoryFilter
        categories={categories}
        selected={category}
        onChange={setCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}