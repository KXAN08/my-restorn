export const fetchRecipes = async () => {
  const response = await fetch('https://dummyjson.com/recipes');
  const data = await response.json();
  return data.recipes;
};

export const fetchRecipeById = async (id) => {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await response.json();
  return data;
};
