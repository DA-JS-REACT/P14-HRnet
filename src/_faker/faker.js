import { faker } from '@faker-js/faker/locale/en_US'
import { departmentField } from '../Data/data'
import { Axios } from '../_services/caller.services'

export function getFakeData() {
    let data = []

    for (let i = 0; i < 10; i++) {
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
        const randomZipCode = faker.address.zipCode()

        const randomDepartment =
            departmentField[random(0, departmentField.length - 1)].name
        data.push({
            id: id,
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
