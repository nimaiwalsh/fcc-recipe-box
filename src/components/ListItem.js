import React from 'react';

const ListItem = ({ name, ingredients }) => {

  const renderIngredients = () => {
    return ingredients.map((item, key) => <li key={key}>{item}</li>)
  }
  
  return (
    <li>
      <div>
        <h1>{name}</h1>
        <ul>{renderIngredients()}</ul>
      </div>
    </li>
  );
};

export default ListItem;
