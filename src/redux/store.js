import { configureStore } from "@reduxjs/toolkit";

import productModalSlice from "./product-modal/productModalSlice";

import cartitemsSlide from "./shopping-cart/cartitemsSlide";

export const store = configureStore({
    reducer: {
        productModal: productModalSlice,
        cartItems: cartitemsSlide
    }
})