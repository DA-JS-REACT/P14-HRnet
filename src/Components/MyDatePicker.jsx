import React, { useEffect } from 'react'
import { ErrorMessage, useField } from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import PropTypes from 'prop-types'
import { useState } from 'react'

export function MyDatePicker({ label, name }) {
    const [field, _meta, helpers] = useField(name)
    const [selected, setSelected] = useState(null)

    // const { value } = meta
    const { setValue } = helpers
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US')
    }

    useEffect(() => {
        setSelected(field.value ? new Date(field.value) : null)
    }, [field.value])

    return (
        <div className="form-group ">
            <label className="form-label" htmlFor={name}>
                {label}
            </label>
            <DatePicker
                id={name}
                className="form-control"
                dateFormat="yyyy-MM-dd"
                placeholderText="YYYY-MM-DD"
                maxDate={new Date()}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                {...field}
                selected={selected}
                onChange={(date) => setValue(formatDate(date))}
            />
            <ErrorMessage
                name={name}
                component="small"
                className="text-danger"
            />
        </div>
    )
}

MyDatePicker.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
}
