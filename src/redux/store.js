import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../redux/reducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;