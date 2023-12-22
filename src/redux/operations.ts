import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://dummyjson.com/';

const getAllProducts = createAsyncThunk(
  'products/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/products/categories');
			console.log(response.data);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);


const getProductsByCategory = createAsyncThunk(
  'products/getByCategory',
  async (category:string, thunkAPI) => {
    try {
      const response = await axios.get(`/products/category/${category}`);

      return {data: response.data.products, category};
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);


const prodOperations = {
	getAllProducts,
  getProductsByCategory,
}

export default prodOperations;