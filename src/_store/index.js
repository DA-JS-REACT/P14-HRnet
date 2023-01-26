import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '@/_features/employees.slice'

export const store = configureStore({
    reducer: {
        employees: employeesReducer,
    },
})
