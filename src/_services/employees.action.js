import { createAsyncThunk } from '@reduxjs/toolkit'
import { Axios } from './caller.services'
/**
 * Call async Api  for employees 's list
 * @function
 * @returns {Promise.<Void>}
 */
export const getEmployees = createAsyncThunk('getEmployees', async () => {
    try {
        const { data } = await Axios.get('/employees')

        return data
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
})
