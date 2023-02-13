import { createAsyncThunk } from '@reduxjs/toolkit'
import { Axios } from '@/_services/caller.services'
import { Database } from '../Data/Database'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
/**
 * Call async Api  for employees 's list
 * @function
 * @returns {Promise.<Void>}
 */
export const getEmployees = createAsyncThunk('getEmployees', async () => {
    const db = getFirestore(Database)
    try {
        const employeesCol = collection(db, 'employees')
        const employeeSnapshot = await getDocs(employeesCol)
        const employeeList = employeeSnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }))
        return employeeList
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
})

/**
 * call async Api for Register user with Post
 * @function
 * @returns {Promise.<Void>}
 */
export const employeesRegister = createAsyncThunk(
    '/createEmployees',
    async (dataRegister, { rejectWithValue }) => {
        try {
            const { data } = await Axios.post('/employees', dataRegister)

            return data
        } catch (error) {
            console.log(error.message)
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
