import {createSlice} from "@reduxjs/toolkit";
import favsHelper from "../../helpers/favs.helper";
import cookiesHelper from "../../helpers/cookies.helper";

export const favsSlice = createSlice({
    name: 'favs',
    initialState: {
        listOfFavs: []
    },
    reducers: {
        toggleFav: (state, action) => {
            if (!favsHelper.isCityInFavs(action.payload, state.listOfFavs)) {
                state.listOfFavs.push(action.payload);
            } else {
                state.listOfFavs = state.listOfFavs.filter(item => item !== action.payload);
            }
            cookiesHelper.setFavsCookie(state.listOfFavs)
        },
        initFavs: (state, action) => {
            const favs = cookiesHelper.getFavsCookie();
            return {...state, listOfFavs: favs}
        }
    }
});

export const {toggleFav, initFavs} = favsSlice.actions;
export default favsSlice.reducer;