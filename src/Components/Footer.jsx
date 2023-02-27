import React from 'react'
import logo from '@/Assets/logo1.png'
/**
 * Footer to the app
 * @returns  {React.ReactElement}
 */
export function Footer() {
    return (
        <footer className="footer">
            <section className="footer-copyright">
                <p>Copyright © 2023</p>
            </section>
            <section className="footer-logo">
                <img
                    className="logo logo-footer"
                    src={logo}
                    alt="logo Wealth Health"
                />
            </section>
        </footer>
    )
}
