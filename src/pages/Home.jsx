import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../api';
import RecipeCard from '../components/RecipeCard';
import RecipeSlider from '../components/RecipeSlider';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes().then(setRecipes);
  }, []);

  return (
    <div className="p-4 container mx-auto">
      <RecipeSlider recipes={recipes} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
