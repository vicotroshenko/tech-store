import { createSlice } from "@reduxjs/toolkit";
import prodOperations from "./operations";

const { getAllProducts, getProductsByCategory } = prodOperations;

export interface IData {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

interface IProductsInitialState {
	allProducts: IData[];
	categories: {
		[x: string]: IData[],
	};
	filteredProducts: IData[];
  status: "loading" | "success" | "error";
}

const initialState: IProductsInitialState = {
	allProducts: [],
	categories: {},
	filteredProducts: [],
  status: "success",
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(
      getAllProducts.fulfilled,
      (state, action) => {
        state.allProducts = action.payload;
        state.status = "success";
      }
    );
    builder.addCase(
      getAllProducts.rejected,
      (state, _action) => {
        state.status = "error";
      }
    );

		builder.addCase(getProductsByCategory.pending, (state, _action) => {
      state.status = "loading";
    });
    builder.addCase(
      getProductsByCategory.fulfilled,
      (state, action) => {
        state.categories[action.payload.category] = action.payload.data;
        state.status = "success";
      }
    );
    builder.addCase(
      getProductsByCategory.rejected,
      (state, _action) => {
        state.status = "error";
      }
    );
  },
});

const productReducer = productsSlice.reducer;
export default productReducer;
