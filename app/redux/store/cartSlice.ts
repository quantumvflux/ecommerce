import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/app/db/data";

interface CartState {
    items: Product[]
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    } as CartState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            state.items.push(action.payload)
        },
        removeFromCart(state, action: PayloadAction<Product>) {
            state.items = state.items.filter((item) => item.id !== action.payload.id)
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer