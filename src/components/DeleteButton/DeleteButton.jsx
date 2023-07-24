import { useStore } from 'components/store';
import React from 'react';

const DeleteButton = () => {
  const deleteItem = useStore(store => store.deleteItem);

  const handleDelete = () => {
    deleteItem();
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
