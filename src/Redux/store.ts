import { configureStore } from '@reduxjs/toolkit';
import loaderSlice from './loaderSlice';
import searchTermSlice from './searchTermSlice';

export const store = configureStore({
    reducer:{
        loaderStore : loaderSlice,
        searchTermStore : searchTermSlice,
    }
});