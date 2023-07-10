import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/app/db/data";

interface CartItem extends Product {
    quantity: number
}

interface CartState {
    items: CartItem[]
}

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    } as CartState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            const { id } = action.payload
            const existingItem = state.items.find(item => item.id === id)

            if (existingItem) {
                existingItem.quantity += 2
            } else {
                const newItem: CartItem = { ...action.payload, quantity: 1 }
                state.items.push(newItem)
            }
        },

        removeFromCart(state, action: PayloadAction<Product>) {
            const { id } = action.payload
            state.items = state.items.filter((item) => item.id !== id)
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer