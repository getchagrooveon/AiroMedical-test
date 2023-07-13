import { useEffect } from 'react';
import Home from './Home/Home';
import { useStore } from './store';
import Loader from './Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import RecipeDetails from './RecipeDetails/RecipeDetails';

export const App = () => {
  const getFirstBatch = useStore(store => store.getFirstBatch);
  const isLoading = useStore(store => store.isLoading);

  useEffect(() => {
    getFirstBatch();
  }, [getFirstBatch]);

  return (
    <>
      {!isLoading ? (
        <Routes>
          <Route path="/" element={<Navigate to="/recipes" />} />
          <Route path="/recipes" element={<Home />} />
          <Route path="/:recipeId" element={<RecipeDetails />} />
          <Route path="*" element={<Navigate to="/recipes" />} />
        </Routes>
      ) : (
        <Loader />
      )}
    </>
  );
};
