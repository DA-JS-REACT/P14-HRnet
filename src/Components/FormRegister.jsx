import React from 'react'
import { Formik, Form } from 'formik'
import { validationSchema } from '@/_services/validation'
import { FieldCustom } from './FieldCustom'
import { SelectState } from './SelectState'
import { SelectDepartment } from './SelectDepartment'
import { useDispatch } from 'react-redux'
import { employeesRegister } from '@/_services/employees.action'
import { MyDatePicker } from './MyDatePicker'
import { Modal, useModal } from '@fredmagione/modals-react-components'

export function FormRegister() {
    const { isShowing, toggle } = useModal()
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
    const handleSubmit = (values, { resetForm }) => {
        dispatch(employeesRegister(values))
        resetForm()
        toggle()
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) =>
                handleSubmit(values, { resetForm })
            }
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

                    <MyDatePicker label="Date of Birth" name="birthdate" />

                    <MyDatePicker label="Start Date" name="startdate" />

                    <fieldset className="form-group-address">
                        <legend>Address</legend>
                        <FieldCustom
                            label="Street"
                            name="address.street"
                            type="text"
                        />

                        <FieldCustom
                            label="City"
                            name="address.city"
                            type="text"
                        />

                        <SelectState />

                        <FieldCustom
                            label="Zip Code"
                            name="address.zipCode"
                            type="string"
                        />
                    </fieldset>
                    <SelectDepartment />

                    <div className="form-group form-group--btn">
                        <button type="submit" className="btn btn-save">
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={resetForm}
                            className="btn btn-cancel"
                        >
                            Cancel
                        </button>
                    </div>
                    <Modal
                        isShowing={isShowing}
                        hide={toggle}
                        title="Employe(e)s Created"
                        keydown={{ active: true, key: 'Escape' }}
                    />
                </Form>
            )}
        </Formik>
    )
}
