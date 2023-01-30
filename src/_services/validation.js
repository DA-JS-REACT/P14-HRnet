import * as Yup from 'yup'

const patternZipCode = /^[1-9]{5}([-][1-9]{4,5})?$/gim

export const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'too short')
        .max(40, 'troo long!')
        .required('This field is required'),
    lastName: Yup.string()
        .min(2, 'too short')
        .max(10, 'troo long!')
        .required('This field is required'),
    birthdate: Yup.string()
        // test , if age >= 18
        .test('birthdate', 'You must be 18 years or older', function (value) {
            const date = new Date(value)
            const now = new Date()
            return now.getFullYear() - date.getFullYear() >= 18
        })
        .required('The birthday is required'),
    startdate: Yup.string().required('the starting date is required'),
    address: Yup.object().shape({
        street: Yup.string()
            .min(2, 'too short')
            .required('This field is required'),
        city: Yup.string()
            .min(2, 'too short')
            .required('This field is required'),
        state: Yup.string().required('you need to select a state'),
        zipCode: Yup.string()
            .matches(
                patternZipCode,
                'Invalid zip code  format 12345 or 12345-12345'
            )
            .required('This field is required'),
    }),
    department: Yup.string().required('you need to select a department'),
})
