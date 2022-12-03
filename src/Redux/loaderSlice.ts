import { createSlice } from '@reduxjs/toolkit';

interface ILoaderState {
    loading: boolean;
}

const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        loading: false,
    },
    reducers: {
        setLoader: (state : ILoaderState, action) => {
            state.loading = action.payload;
        }
    }
});

export const {setLoader} = loaderSlice.actions;

export default loaderSlice.reducer;