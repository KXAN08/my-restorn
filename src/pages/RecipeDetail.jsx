import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Maʼlumot yuklab olinmadi');
        return res.json();
      })
      .then((data) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(recipe));
    toast.success('Savatga qo‘shildi');
  };

  if (loading) return <div className="text-center py-10 text-gray-500">Yuklanmoqda...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Xatolik: {error}</div>;

  return (
    <div className="max-w-4xl container mx-auto p-4">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-600 underline">⬅️ Orqaga</button>
      <img
        src={recipe.image || recipe.thumbnail}
        alt={recipe.name || recipe.title}
        className="w-full h-96 object-cover mb-4 rounded"
      />
      <h1 className="text-2xl font-bold mb-2">{recipe.name || recipe.title}</h1>
      <p className="text-gray-700 mb-4">{recipe.description || recipe.instructions}</p>
      {recipe.price && (
        <p className="text-xl font-semibold text-green-600">
          ${recipe.price.toLocaleString()}
        </p>
      )}
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Savatga qo‘shish
      </button>
    </div>
  );
}

export default RecipeDetail;
