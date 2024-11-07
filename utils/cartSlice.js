import { createSlice } from "@reduxjs/toolkit";
// createSlice takes configuration to create slice
const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{ // reducer fn modifies the cart
        addItem:(state,action) => //additem modifies the state based on the action
        {
            state.items.push(action.payload); 
        },
        removeItem:(state)=>
        {
            state.items.pop();
        },
        clearCart:(state)=>
        {
            state.items.length=0;
        }
    }
});
export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer; 

//initial state - initially the cart items, items is an empty object or array
//reducers(obj) corresponding to the actions,actions are commonly like add item,remove item,clear the cart

