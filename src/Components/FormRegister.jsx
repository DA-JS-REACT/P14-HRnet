import React from 'react'
import { Formik, Form } from 'formik'
import { validationSchema } from '@/_services/validation'
import { FieldCustom } from './FieldCustom'
import { SelectState } from './SelectState'
import { SelectDepartment } from './SelectDepartment'

export function FormRegister() {
    const initialValues = {
        firstName: '',
        lastName: '',
        birthDate: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: '',
    }
    const handleSubmit = (values) => {
        console.log(values)
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
                        name="birthDate"
                        type="date"
                    />

                    <FieldCustom
                        label="Start Date"
                        name="startDate"
                        type="date"
                    />

                    <fieldset className="form-group-address">
                        <legend>Address</legend>
                        <FieldCustom label="Street" name="street" type="text" />

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
