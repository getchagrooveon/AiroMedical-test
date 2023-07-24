import Button from 'components/Button/Button';
import DeleteButton from 'components/DeleteButton/DeleteButton';
import { useStore } from 'components/store';
import React from 'react';

const Home = () => {
  const recipes = useStore(store => store.recipes);
  const addToList = (id, event) => {
    console.log(event);
    console.log(id);
  };
  return (
    <div>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <input
              type="checkbox"
              onClick={event => addToList(recipe.id, event)}
            ></input>
            {recipe.name}
            <Button info={recipe} />
          </li>
        ))}
      </ul>
      <DeleteButton />
    </div>
  );
};

export default Home;
