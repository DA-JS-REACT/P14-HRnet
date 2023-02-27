import React from 'react'
import PropTypes from 'prop-types'
/**
 * Disply message error
 * @prop {string} status
 * @prop {string} message
 * @returns {React.ReactElement}
 */
export function Error({ status, message }) {
    return (
        <section className="error">
            <div className="error-title">
                <h1> {status}</h1>
            </div>
            <div className="error-message">
                <p>{message}</p>
                <p>Please try again later</p>
            </div>
        </section>
    )
}

Error.propTypes = {
    status: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
}
