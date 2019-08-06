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

const addIngredient = (state, action) => {
  return {
    ...state,
    ingredients: {
      ...state.ingredients,
      [action.ingredientName]: state.ingredients[action.ingredientName] + 1
    },
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
  };
};
const removeIngredient = (state, action) => {
  return {
    ...state,
    ingredients: {
      ...state.ingredients,
      [action.ingredientName]: state.ingredients[action.ingredientName] - 1
    },
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
  };
};
const setIngredients = (state, action) => {
  return {
    ...state,
    ingredients: action.ingredients,
    totalPrice: 10,
    error: false
  };
};
const fetchIngredientsFails = state => {
  return {
    ...state,
    error: true
  };
};

// I tried to structure my switch-case code
const burgerBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);

    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);

    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);

    case actionTypes.FETCH_INGREDIENTS_FAILS:
      return fetchIngredientsFails(state);

    default:
      return state;
  }
};

export default burgerBuilderReducer;
