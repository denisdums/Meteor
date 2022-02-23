import {configureStore} from '@reduxjs/toolkit'
import favs from './reducers/favsReducer'

export default configureStore({
    reducer: {
        favs: favs
    }
})