import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { validationSchema } from '@/_services/validation'

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
                    <div className="form-group ">
                        <label className="form-label" htmlFor="firstName">
                            First Name
                        </label>
                        <Field
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="firstName"
                            component="small"
                            className="text-danger"
                        />
                    </div>
                    <div className="form-group ">
                        <label className="form-label" htmlFor="lastName">
                            Last Name
                        </label>
                        <Field
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="lastName"
                            component="small"
                            className="text-danger"
                        />
                    </div>
                    <div className="form-group ">
                        <label className="form-label" htmlFor="birthDate">
                            Date of Birth
                        </label>
                        <Field
                            type="date"
                            id="birthDate"
                            name="birthDate"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="birthDate"
                            component="small"
                            className="text-danger"
                        />
                    </div>
                    <div className="form-group ">
                        <label className="form-label" htmlFor="startDate">
                            Start Date
                        </label>
                        <Field
                            type="date"
                            id="startDate"
                            name="startDate"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="startDate"
                            component="small"
                            className="text-danger"
                        />
                    </div>
                    <fieldset className="form-group-address">
                        <legend>Address</legend>
                        <div className="form-group ">
                            <label className="form-label" htmlFor="street">
                                Street
                            </label>
                            <Field
                                type="text"
                                id="street"
                                name="street"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="street"
                                component="small"
                                className="text-danger"
                            />
                        </div>
                        <div className="form-group ">
                            <label className="form-label" htmlFor="city">
                                City
                            </label>
                            <Field
                                type="text"
                                id="city"
                                name="city"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="city"
                                component="small"
                                className="text-danger"
                            />
                        </div>
                        <div className="form-group ">
                            <label className="form-label" htmlFor="state">
                                State
                            </label>
                            <Field
                                as="select"
                                id="state"
                                name="state"
                                className="form-control"
                            >
                                <option value="">state</option>
                                <option value="red">Red</option>
                            </Field>
                            <ErrorMessage
                                name="state"
                                component="small"
                                className="text-danger"
                            />
                        </div>
                        <div className="form-group ">
                            <label className="form-label" htmlFor="zipCode">
                                Zip Code
                            </label>
                            <Field
                                type="number"
                                min="0"
                                id="zipCode"
                                name="zipCode"
                                className="form-control"
                            />
                            <ErrorMessage
                                name="zipCode"
                                component="small"
                                className="text-danger"
                            />
                        </div>
                    </fieldset>
                    <div className="form-group ">
                        <label className="form-label" htmlFor="department">
                            Department
                        </label>
                        <Field
                            as="select"
                            id="department"
                            name="department"
                            className="form-control"
                        >
                            <option value="">department</option>
                            <option value="red">Red</option>
                        </Field>
                        <ErrorMessage
                            name="department"
                            component="small"
                            className="text-danger"
                        />
                    </div>
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
