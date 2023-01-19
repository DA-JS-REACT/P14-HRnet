import React from 'react'
import { Header } from '@/Components/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

/**
 * Layout that contains the different pages
 * @returns  {React.ReactElement}
 */
export function Layout() {
    return (
        <div className="Layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
