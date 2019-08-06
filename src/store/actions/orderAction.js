import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgerFails = error => {
  return { type: actionTypes.PURCHASE_BURGER_FAILS, error: error };
};

export const purchaseBurgerStart = () => {
  return { type: actionTypes.PURCHASE_BURGER_START };
};

export const purchaseBurgerInit = () => {
  return { type: actionTypes.PURCHASE_BURGER_INIT };
};

export const purchaseBurger = orderData => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post("/orders.json", orderData)
      .then(response => {
        console.log(response.data);
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseBurgerFails(error));
      });
  };
};

export const fetchOrderSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDER_SUCCESS,
    orders: orders
  };
};

export const fetchOrderFails = error => {
  return { type: actionTypes.FETCH_ORDER_FAILS, error: error };
};

export const fetchOrderStart = () => {
  return { type: actionTypes.FETCH_ORDER_START };
};

export const fetchOrder = () => {
  return dispatch => {
    //   dispatch(fetchOrderStart());
    axios
      .get("/orders.json")
      .then(response => {
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key
          });
        }
        dispatch(fetchOrderSuccess(fetchedOrders));
      })
      .catch(error => {
        dispatch(fetchOrderFails(error));
      });
  };
};
