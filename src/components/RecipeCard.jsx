import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../redux/favoritesSlice';
import { addToCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';

function RecipeCard({ recipe }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [likeAnim, setLikeAnim] = useState(false);
  const [cartAnim, setCartAnim] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    dispatch(addToFavorites(recipe));
    toast.success('Yoqtirganlarga qo‘shildi');
    setLikeAnim(true);
    setTimeout(() => setLikeAnim(false), 500); 
  };

  const handleCart = () => {
    dispatch(addToCart(recipe));
    toast.success('Savatga qo‘shildi');
    setCartAnim(true);
    setTimeout(() => setCartAnim(false), 300);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
      onClick={() => navigate(`/recipe/${recipe.id}`)}
      aria-label={`View details of ${recipe.name}`}
    >
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{recipe.name}</h3>
        <div className="flex justify-between">
          <button
            onClick={(e) => {
              e.stopPropagation(); 
              handleLike();
            }}
            aria-label={liked ? "Remove from favorites" : "Add to favorites"}
            className={`transition-transform ${
              likeAnim ? 'animate-like-pulse' : ''
            }`}
          >
            {liked ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart />
            )}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCart();
            }}
            aria-label="Add to cart"
            className={`transition-transform ${
              cartAnim ? 'animate-cart-bounce' : ''
            }`}
          >
            <FaShoppingCart className="text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
