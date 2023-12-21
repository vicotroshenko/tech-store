import { createSlice } from "@reduxjs/toolkit";
import prodOperations from './operations';

interface IProductsInitialState {
	data: object[];
}

const initialState: IProductsInitialState = {
	data: [{}],
}

const productsSlice = createSlice({
	name: "products",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(prodOperations.getAllProducts.pending, (state, _action) => {
			state.data = [{}]
		})
		builder.addCase(prodOperations.getAllProducts.fulfilled, (state, action) => {
			state.data = action.payload
		})
	},
})

const productReducer = productsSlice.reducer
export default productReducer;