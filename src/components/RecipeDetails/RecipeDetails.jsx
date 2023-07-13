import { useStore } from 'components/store';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const getRecipeById = useStore(store => store.getRecipeById);
  const info = useParams();

  console.log(info.recipeId);

  useEffect(() => {
    getRecipeById();
  }, []);

  return <div>RecipeDetails {info.recipeId}</div>;
};

export default RecipeDetails;
