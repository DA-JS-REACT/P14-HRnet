import React from 'react'
import { Header } from '@/Components/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export function Layout() {
    return (
        <div className="Layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
