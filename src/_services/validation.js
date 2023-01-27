import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'too short')
        .max(40, 'troo long!')
        .required('This field is required'),
    lastName: Yup.string()
        .min(2, 'too short')
        .max(10, 'troo long!')
        .required('This field is required'),
    birthdate: Yup.string().required('The birthday is required'),
    startdate: Yup.string().required('the starting date is required'),
    address: {
        street: Yup.string()
            .min(2, 'too short')
            .required('This field is required'),
        city: Yup.string()
            .min(2, 'too short')
            .required('This field is required'),
        state: Yup.string().required('you need to select a state'),
        zipCode: Yup.number()
            .lessThan(100000, 'Zip code is too long')
            .positive('cannot be negative')
            .required('This field is required'),
    },
    department: Yup.string().required('you need to select a department'),
})
