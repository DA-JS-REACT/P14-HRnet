import React from 'react'
import PropTypes from 'prop-types'
/**
 * to customize the message
 * @param {string} message - mesage to delivrate on modal
 * @returns  {React.ReactElement}
 */
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
