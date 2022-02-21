import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    customers: {}
}

export const customerSlice = createSlice({
    name: "customers",
    initialState: initialStateValue,
    reducers: {
        addCustomers: (state, action) => {
            state.customers = action.payload;
        }}})

export const { addCustomers } = customerSlice.actions;
export const getAllCustomers = (state) => state.customers.customers
export default customerSlice.reducer;
    