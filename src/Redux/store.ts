import { configureStore } from '@reduxjs/toolkit';
import buttonsSlice from './buttonsSlice';
import loaderSlice from './loaderSlice';
import searchTermSlice from './searchTermSlice';

export const store = configureStore({
    reducer:{
        loaderStore : loaderSlice,
        searchTermStore : searchTermSlice,
        buttonsStore : buttonsSlice
    }
});