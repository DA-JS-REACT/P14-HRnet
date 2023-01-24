import React from 'react'
import { Field, ErrorMessage } from 'formik'

import PropTypes from 'prop-types'

/**
 * Custom field to Formik
 * @prop {string} label - label for the field
 * @prop {string} name - name for field id and error messages
 * @prop {string} type - type of field ex: text, integer ...
 * @returns {React.ReactElement }
 */
export function FieldCustom({ label, name, type }) {
    let min = ''
    if (type === 'number') {
        min = 0
    }
    return (
        <div className="form-group ">
            <label className="form-label" htmlFor={name}>
                {label}
            </label>
            <Field
                type={type}
                min={min}
                id={name}
                name={name}
                className="form-control"
            />
            <ErrorMessage
                name={name}
                component="small"
                className="text-danger"
            />
        </div>
    )
}

FieldCustom.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}
