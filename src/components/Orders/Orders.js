import React from "react";

import classes from "./Orders.css";

const Orders = props => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ingredient => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ingredient.name}
      >
        {ingredient.name} ({ingredient.amount})
      </span>
    );
  });

  return (
    <div className={classes.Orders}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>{props.price} Taka</strong>
      </p>
    </div>
  );
};

export default Orders;
