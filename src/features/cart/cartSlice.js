import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { openModal } from "../modal/modalSlice";
const initialState = {
    cartItems: [],
    total: 0,
    amount: 0,
    isLoading: true
}

export const getCartItems = createAsyncThunk('cart/getCartItems', async (name, thunkAPI) => {
    console.log(name);
    console.log(thunkAPI.getState());
    // console.log(thunkAPI.dispatch(openModal()));
    try {
        const response = await fetch('https://dummyjson.com/products?limit=5');
        if (!response.ok) {
            throw new Error('Failed to fetch cart items');
        }
        const data = await response.json();
        const prods = data.products.map(prod => { prod.amount = 1; return prod })
        return prods;
    } catch (error) {
        console.error(error);
        throw error;
    }
})

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== itemId);
        },
        incrementItem: (state, { payload }) => {
            const cartItem = state.cartItems.find(item => item.id === payload.id);
            cartItem.amount += 1
        },
        decrementItem: (state, { payload }) => {
            const cartItem = state.cartItems.find(item => item.id === payload.id);
            cartItem.amount -= 1
        },
        cartSummary: (state) => {
            const cartTotal = state.cartItems.reduce((t, item) => {
                return t += (item.amount * item.price);
            }, 0)
            state.total = cartTotal;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCartItems.pending, (state) => { state.isLoading = true }).
            addCase(getCartItems.fulfilled, (state, action) => {
                console.log(action);
                state.cartItems = action.payload;
                state.isLoading = false;
            }).addCase(getCartItems.rejected, (state) => { state.isLoading = false })
    }
})
export const { clearCart, removeItem, incrementItem, decrementItem, cartSummary } = cartSlice.actions;
export default cartSlice.reducer;