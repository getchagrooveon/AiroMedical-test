import Loader from 'components/Loader/Loader';
import { useStore } from 'components/store';
import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const getById = useStore(store => store.getRecipeById);
  const selectRecipe = useStore(store => store.selectRecipe);
  const isLoading = useStore(store => store.isLoading);

  useEffect(() => {
    getById(recipeId);
  }, []);

  return (
    <>
      <NavLink to={`/recipes`}>Back to all recipes</NavLink>
      {selectRecipe[0] !== undefined ? (
        <>
          <h1>{selectRecipe[0].name}</h1>
          <p>{selectRecipe[0].description}</p>
          <img
            src={selectRecipe[0].image_url}
            alt={selectRecipe[0].name}
            height="300"
          />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default RecipeDetails;
