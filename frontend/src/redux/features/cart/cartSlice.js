import { createSlice } from '@reduxjs/toolkit'
import  Swal  from 'sweetalert2';

const initialState = {
    cartItems: [],
  }

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id  === action.payload._id);
            if(!existingItem){
                state.cartItems.push(action.payload)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Book added to cart",
                    showConfirmButton: false,
                    timer: 1500
                  });
            } else{
                Swal.fire({
                    title: "Book already exists",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Ok"
                  })
            }
        },
        removeFromCart: (state, action) =>{
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload)
        },
        clearCart: (cart) =>{
            state.cartItems = []
        }

    }
})


export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer