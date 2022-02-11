import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';

// import cartReducer from "./features/cartSlicer";
import { articlesApi } from './../utils/articlesApi';

export const store= configureStore({
    reducer:{

        [articlesApi.reducerPath]:articlesApi.reducer,
    },
    middleware:(getDefaultMiddleware) =>(
        getDefaultMiddleware().concat(articlesApi.middleware)
        ),
})
setupListeners(store.dispatch); // = store.dispatch(productsFetch());
