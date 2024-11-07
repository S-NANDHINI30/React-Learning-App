import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
//configure store gives store of our react application
const appStore = configureStore(
    {
        reducer:                                        //reducer is a combination of different slice
        {
            cart:cartReducer,
        }
    }
);
export default appStore;