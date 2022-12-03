import { createSlice } from '@reduxjs/toolkit';

interface ISearchTermState {
    storeSearchTerm: string;
}

const searchTermSlice = createSlice({
    name: 'Search Term',
    initialState: {
        storeSearchTerm: "",
    },
    reducers: {
        setStoreSearchTerm: (state : ISearchTermState, action) => {
            state.storeSearchTerm = action.payload;
        }
    }
});

export const { setStoreSearchTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;