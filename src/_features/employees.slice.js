import { createSlice } from '@reduxjs/toolkit'
import { getEmployees, employeesRegister } from '@/_services/employees.action'

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
            .addCase(employeesRegister.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(employeesRegister.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.employeesInfo = [
                    ...state.employeesInfo,
                    {
                        firstName: action.payload.firstName,
                        lastName: action.payload.lastName,
                        birthdate: action.payload.birthdate,
                        startdate: action.payload.startdate,
                        address: {
                            street: action.payload.address.street,
                            city: action.payload.address.city,
                            state: action.payload.address.state,
                            zipCode: action.payload.address.zipCode,
                        },
                        department: action.payload.department,
                    },
                ]
            })
            .addCase(employeesRegister.rejected, (state, payload) => {
                state.loading = false
                state.error = payload
            })
    },
})
export default employeesSlice.reducer
