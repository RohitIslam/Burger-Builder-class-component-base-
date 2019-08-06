import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredients = name => {
  return { type: actionTypes.ADD_INGREDIENT, ingredientName: name };
};

export const removeIngredients = name => {
  return { type: actionTypes.REMOVE_INGREDIENT, ingredientName: name };
};

export const setIngredients = ingredients => {
  return { type: actionTypes.SET_INGREDIENTS, ingredients: ingredients };
};

export const fetchIngredientsFails = () => {
  return { type: actionTypes.FETCH_INGREDIENTS_FAILS };
};

export const initializeIngredients = () => {
  // this dispatch function is available for redux thunk (check in index.js)
  return dispatch => {
    axios
      .get("https://react-course-burger-9912f.firebaseio.com/ingredients.json")
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFails());
      });
  };
};
