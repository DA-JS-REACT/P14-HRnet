import React from 'react'
import PropTypes from 'prop-types'

export function MessageModal({ message }) {
    return (
        <div className="Modal-message">
            <p className="message">{message}</p>
        </div>
    )
}

MessageModal.propTypes = {
    message: PropTypes.string,
}
