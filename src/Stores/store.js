import { configureStore } from "@reduxjs/toolkit";
import ImageSlice from "./ImageSlice";
import TokenSlice from "./TokenSlice";

export const store = configureStore({
    reducer: {
        image: ImageSlice,
        token: TokenSlice
    }
})