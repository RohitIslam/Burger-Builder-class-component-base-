import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  console.log(
    "Array of ingredients name only: ",
    Object.keys(props.ingredients)
  );
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      console.log(
        "Array of ingredients quantity only:  ",
        props.ingredients[ingredientKey]
      );
      console.log(
        "using this array for getting the length only:  ",
        ...Array(props.ingredients[ingredientKey])
      );
      return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
        return (
          <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
        );
      });
    })
    .reduce((array, element) => {
      return array.concat(element);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
