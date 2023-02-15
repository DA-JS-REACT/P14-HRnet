import { createSlice } from '@reduxjs/toolkit'
import { getEmployees, employeesRegister } from '@/_services/employees.action'

const initialState = {
    loading: true,
    employeesInfo: [],
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
                console.log('employees', state.employeesInfo)
                console.log('action', action.meta)
                state.loading = false
                state.error = null
                state.employeesInfo = [
                    ...state.employeesInfo,
                    {
                        firstName: action.meta.arg.firstName,
                        lastName: action.meta.arg.lastName,
                        birthdate: action.meta.arg.birthdate,
                        startdate: action.meta.arg.startdate,
                        address: {
                            street: action.meta.arg.address.street,
                            city: action.meta.arg.address.city,
                            state: action.meta.arg.address.state,
                            zipCode: action.meta.arg.address.zipCode,
                        },
                        department: action.meta.arg.department,
                    },
                ]
            })
            .addCase(employeesRegister.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    },
})
export default employeesSlice.reducer
