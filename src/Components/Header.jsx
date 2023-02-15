import React from 'react'
import logo from '@/Assets/logo2.png'
import { Link, useLocation } from 'react-router-dom'

/**
 * Header  to the app
 * @returns  {React.ReactElement}
 */
export function Header() {
    const location = useLocation()

    return (
        <div className="Header">
            <div className="Header-contain">
                <div className="contain-logo">
                    <img className="logo" src={logo} alt="logo Wealth Health" />
                </div>
                <div className="contain-title">
                    <h1 className="title">HRnet</h1>
                </div>
                <div className="contain-link">
                    {location.pathname === '/P14-HRnet/employees' ? (
                        <Link className="link" to="/P14-HRnet">
                            Home
                        </Link>
                    ) : (
                        <Link className="link" to="P14-HRnet/employees">
                            Employees
                        </Link>
                    )}
                </div>
            </div>
            <div className="Header-ligne">
                <hr className="ligne" />
            </div>
        </div>
    )
}
