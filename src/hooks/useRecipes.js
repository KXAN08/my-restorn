import { useEffect, useState } from 'react';
import { fetchRecipes } from '../api';

export const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes().then(setRecipes);
  }, []);

  return recipes;
};
