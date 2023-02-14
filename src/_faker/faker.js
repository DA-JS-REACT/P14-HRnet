import { faker } from '@faker-js/faker/locale/en_US'
import { departmentField } from '../Data/data'
import { Axios } from '../_services/caller.services'

import { Database } from '../Data/Database'
import { collection, addDoc } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'

export function getFakeData() {
    let data = []

    for (let i = 0; i < 50; i++) {
        const id = i + 1
        const randomFirstName = faker.name.firstName({ sex: 'female' | 'male' })
        const randomLastName = faker.name.lastName()
        const randomBirthDate = faker.date.birthdate({
            min: 18,
            max: 65,
            mode: 'age',
        })
        const randomStartDate = faker.date.between(
            randomBirthDate,
            '2023-01-24T00:00:00.000Z'
        )
        const randomStreet = faker.address.street()
        const randomCity = faker.address.cityName()
        const randomState = faker.address.state()

        // for project with queries
        // const randomState = faker.address.stateAbbr()
        // const randomZipCode = faker.address.zipCode('#####')
        const randomZipCode = faker.address.zipCode()
        // use data  to the form Register
        const randomDepartment =
            departmentField[random(0, departmentField.length - 1)].name
        data.push({
            firstName: randomFirstName,
            lastName: randomLastName,
            birthdate: randomBirthDate.toLocaleDateString('en-US'),
            startdate: randomStartDate.toLocaleDateString('en-US'),
            address: {
                street: randomStreet,
                city: randomCity,
                state: randomState,
                zipCode: randomZipCode,
            },

            department: randomDepartment,
        })
    }
    console.log('faker', data)
    return data
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// export async function getData() {
//     try {
//         const response = await Axios.post('/employees', getFakeData())
//         console.log(response.data)
//     } catch (error) {
//         console.error(error)
//     }
// }

// to generate fake data, remove the comment.
// Don't forget to comment afterwards.
// Before you have to empty the db.json and should be like this "employees" : []

// remove comment
// getData()

// const db = getFirestore(Database)
export async function createEmployees(db) {
    const employeesCollection = collection(db, 'employees')
    const data = getFakeData()
    let employeesRef = {}
    for (let i = 0; i < data.length; i++) {
        employeesRef = await addDoc(employeesCollection, data[i])
    }

    return employeesRef
}

// createEmployees(db)
