import Button from 'components/Button/Button';
import { useStore } from 'components/store';
import React from 'react';

const Home = () => {
  const recipes = useStore(store => store.recipes);
  return (
    <div>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            {recipe.name}
            <Button info={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
