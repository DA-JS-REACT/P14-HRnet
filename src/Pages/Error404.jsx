import React from 'react'
import { Link } from 'react-router-dom'
/**
 * page Not Found
 * @returns {React.ReactElement}
 */
export function Error404() {
    return (
        <section className="Error">
            <div className="Error-contain">
                <h1 className="Error-contain__title">404 Not found</h1>
                <p className="Error-contain__message">
                    Cette page n'existe pas
                </p>
            </div>
            <div className="Error-link">
                <Link to="/P14-HRnet">Retour à la page d'acceuil</Link>
            </div>
        </section>
    )
}
