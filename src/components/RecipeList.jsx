// /src/components/RecipeList.jsx
import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => {
        const recipesWithPrice = data.recipes.map((recipe, index) => ({
          ...recipe,
          price: 5000 + index * 1000,  
        }));
        setRecipes(recipesWithPrice);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
