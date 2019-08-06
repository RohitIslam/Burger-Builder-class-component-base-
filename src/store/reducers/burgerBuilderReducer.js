import * as actionTypes from "../actions/actionTypes";

const initialState = {
  // ingredients: {
  //   salad: 0,
  //   cheese: 0,
  //   bacon: 0,
  //   meat: 0
  // },
  ingredients: null,
  totalPrice: 10,
  error: false
};

const INGREDIENT_PRICES = {
  salad: 5,
  cheese: 15,
  bacon: 20,
  meat: 25
};

const burgerBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        totalPrice: 10,
        error: false
      };
    case actionTypes.FETCH_INGREDIENTS_FAILS:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default burgerBuilderReducer;
