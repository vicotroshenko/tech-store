import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlice";

const store = configureStore({
	reducer: {
		products: productReducer,
	}
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;