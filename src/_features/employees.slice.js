import { createSlice } from '@reduxjs/toolkit'
import { getEmployees } from '@/_services/employees.action'

const initialState = {
    loading: true,
    employeesInfo: {},
    error: null,
}

export const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEmployees.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getEmployees.fulfilled, (state, { payload }) => {
                state.loading = false
                state.employeesInfo = payload
                state.error = null
            })
            .addCase(getEmployees.rejected, (state, payload) => {
                state.loading = false
                state.error = payload
            })
    },
})
export default employeesSlice.reducer
