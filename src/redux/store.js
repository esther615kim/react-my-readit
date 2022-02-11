import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import postsReducer from './features/postsSlicer'

export const store= configureStore({
    reducer:{
        posts:postsReducer,
    },
})
setupListeners(store.dispatch); // = store.dispatch(productsFetch());
