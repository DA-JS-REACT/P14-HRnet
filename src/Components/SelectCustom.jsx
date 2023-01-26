import React from 'react'
import { Field, ErrorMessage } from 'formik'
import PropTypes from 'prop-types'

/**
 * Custom field Select to Formik
 * @prop {string} label - label for the field
 * @prop {string} name - name for field id and error messages
 * @prop {Array.<{name:String,abbreviation:String}>} data - data for select
 * @returns {React.ReactElement }
 */
export function SelectCustom({ label, name, data }) {
    return (
        <div className="form-group ">
            <label className="form-label" htmlFor={name}>
                {label}
            </label>
            <Field as="select" id={name} name={name} className="form-control">
                <option value="">Select a choice</option>
                {data.map((item) => (
                    <option key={item.name} value={item.name}>
                        {item.name}
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
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            abbreviation: PropTypes.string,
        })
    ).isRequired,
}
