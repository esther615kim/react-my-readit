import { createSlice } from "@reduxjs/toolkit";
import {useContext}from 'react';
import { getTopics } from '../../utils/api';

// import {toast} from "react-toastify";
import ArticleContext from './../../contexts/articleContext';


const initialState = {
  articleList: [
  ]
  // cartItems:localStorage.getItem("mycart")? JSON.parse(localStorage.getItem("mycart")):[],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
  
  },
});

export const {} =
  postsSlice.actions; // individual reducer

export default postsSlice.reducer;
