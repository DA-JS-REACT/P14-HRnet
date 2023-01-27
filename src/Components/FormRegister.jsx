import React from 'react'
import { Formik, Form } from 'formik'
import { validationSchema } from '@/_services/validation'
import { FieldCustom } from './FieldCustom'
import { SelectState } from './SelectState'
import { SelectDepartment } from './SelectDepartment'
import { useDispatch } from 'react-redux'
import { employeesRegister } from '@/_services/employees.action'

export function FormRegister() {
    const dispatch = useDispatch()
    const initialValues = {
        firstName: '',
        lastName: '',
        birthdate: '',
        startdate: '',
        address: {
            street: '',
            city: '',
            state: '',
            zipCode: '',
        },
        department: '',
    }
    const handleSubmit = (values) => {
        console.log(values)
        dispatch(employeesRegister(values))
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
        >
            {({ resetForm }) => (
                <Form className="form">
                    <FieldCustom
                        label="First Name"
                        name="firstName"
                        type="text"
                    />

                    <FieldCustom
                        label="Last Name"
                        name="lastName"
                        type="text"
                    />

                    <FieldCustom
                        label="Date of Birth"
                        name="birthdate"
                        type="date"
                    />

                    <FieldCustom
                        label="Start Date"
                        name="startdate"
                        type="date"
                    />

                    <fieldset className="form-group-address">
                        <legend>Address</legend>
                        <FieldCustom
                            label="Street"
                            name="address.street"
                            type="text"
                        />

                        <FieldCustom label="City" name="city" type="text" />

                        <SelectState />

                        <FieldCustom
                            label="Zip Code"
                            name="zipCode"
                            type="number"
                        />
                    </fieldset>
                    <SelectDepartment />

                    <div className="form-group form-group--btn">
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={resetForm}
                            className="btn btn-danger"
                        >
                            Cancel
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
