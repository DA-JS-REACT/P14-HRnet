import React from 'react'
import { Formik, Form } from 'formik'
import { validationSchema } from '@/_services/validation'
import { FieldCustom } from '@/Components/FieldCustom'
import { SelectState } from '@/Components/SelectState'
import { SelectDepartment } from '@/Components/SelectDepartment'
import { useDispatch } from 'react-redux'
import { employeesRegister } from '@/_services/employees.action'
import { getEmployees } from '@/_services/employees.action'
import { MyDatePicker } from '@/Components/MyDatePicker'
import { Modal, useModal } from '@fredmagione/modals-react-components'
import { MessageModal } from '@/Components/MessageModal'
/**
 *  form to register Employe(e)s
 * @returns  {React.ReactElement}
 */
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
        dispatch(getEmployees())
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
                <Form className="form" data-testid="register-form">
                    <div className="form_responsive form_responsive--1">
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
                    </div>

                    <fieldset className="form-group-address form_responsive form_responsive--2">
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
                    <div className="form_responsive form_responsive--3">
                        <SelectDepartment />
                    </div>

                    <div className="form-group form-group--btn form_responsive form_responsive--4">
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
                        title={
                            <MessageModal message="Employe(e)s Created !! " />
                        }
                        keydown={{ active: true, key: 'Escape' }}
                    />
                </Form>
            )}
        </Formik>
    )
}
