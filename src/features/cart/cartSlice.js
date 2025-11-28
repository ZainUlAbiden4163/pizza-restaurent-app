import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// BEFORE RESELECT Library

// export const getCartPizzaQuantity = (state) =>
//   state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
// export const getCartPizzaPrice = (state) =>
//   state.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0);

// AFTER RESELECT Library
export const getCart = createSelector(
  (state) => state.cart.cart,

  (cart) => cart,
);
export const getCartPizzaQuantity = createSelector(
  (state) => state.cart.cart,
  (quantity) => quantity.reduce((sum, item) => sum + item.quantity, 0),
);
export const getCartPizzaPrice = createSelector(
  (state) => state.cart.cart,

  (price) => price.reduce((sum, item) => sum + item.totalPrice, 0),
);

export const currentItemId = (id) =>
  createSelector(
    (state) => state.cart.cart,
    (cart) => cart.find((item) => item.pizzaId == id)?.quantity ?? 0,
  );
