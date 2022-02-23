import {createSlice} from "@reduxjs/toolkit";
import favsHelper from "../../helpers/favs.helper";

export const favsSlice = createSlice({
    name: 'favs',
    initialState: {
        listOfFavs: []
    },
    reducers: {
        toggleFav: (state, action) => {
            if (!favsHelper.isCityInFavs(action.payload,state.listOfFavs)) {
                state.listOfFavs.push(action.payload);
            } else {
                state.listOfFavs = state.listOfFavs.filter(item => item !== action.payload);
            }
        },
    }
});

export const {toggleFav} = favsSlice.actions;
export default favsSlice.reducer;