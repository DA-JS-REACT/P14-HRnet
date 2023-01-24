import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { statesField, departmentField } from '@/Data/data'
import PropTypes from 'prop-types'

/**
 * Custom field Select to Formik
 * @prop {string} label - label for the field
 * @prop {string} name - name for field id and error messages
 * @returns {React.ReactElement }
 */
export function SelectCustom({ label, name }) {
    let data = ''
    switch (name) {
        case 'state':
            data = statesField
            break
        case 'department':
            data = departmentField
            break
        default:
            data = [{ name: 'default' }]
    }
    console.log(data)
    return (
        <div className="form-group ">
            <label className="form-label" htmlFor={name}>
                {label}
            </label>
            <Field as="select" id={name} name={name} className="form-control">
                <option value="">{name}</option>
                {data.map((stateName) => (
                    <option key={stateName.name} value={stateName.name}>
                        {stateName.name}
                    </option>
                ))}
            </Field>
            <ErrorMessage
                name={name}
                component="small"
                className="text-danger"
            />
        </div>
    )
}
SelectCustom.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
}
