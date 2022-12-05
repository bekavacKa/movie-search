import { createSlice } from '@reduxjs/toolkit';

interface IButtonsState {
    tvShowsButton: boolean;
    movieButton: boolean;
}

const buttonsSlice = createSlice({
    name: 'buttons',
    initialState: {
        tvShowsButton: true,
        movieButton: false
    },
    reducers: {
        setTvShowsButton: (state : IButtonsState, action) => {
            state.tvShowsButton = action.payload;
        },
        setMovieButton: (state : IButtonsState, action) => {
            state.movieButton = action.payload;
        }
    }
});

export const {setTvShowsButton, setMovieButton} = buttonsSlice.actions;

export default buttonsSlice.reducer;