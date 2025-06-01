import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://dummyjson.com/recipes')
      .then((res) => {
        if (!res.ok) throw new Error('Maʼlumot yuklab bo‘lmadi');
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Yuklanmoqda...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Xatolik: {error}</div>;
  }

  return (
    <div className="max-w-6xl container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Mahsulotlar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="border rounded hover:shadow-md transition p-4"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-48 w-full object-cover mb-2 rounded"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-green-600 font-bold">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
