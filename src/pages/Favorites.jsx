import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../redux/favoritesSlice';
import { useNavigate } from 'react-router-dom';

function Favorites() {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl p-6 container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Yoqtirganlar</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {favorites.map(recipe => (
          <div key={recipe.id} className="bg-white rounded shadow p-4">
            <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover rounded mb-2" />
            <h3 className="text-lg font-semibold">{recipe.name}</h3>
            <div className="flex justify-between mt-2">
              <button onClick={() => navigate(`/recipe/${recipe.id}`)} className="text-blue-600">Batafsil</button>
              <button onClick={() => dispatch(removeFromFavorites(recipe))} className="text-red-600">O‘chirish</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
