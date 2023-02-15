import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Employees } from '@/Pages/Employees'
import { Home } from '@/Pages/Home'
import { Layout } from '@/Components/Layout'
import { Error404 } from '../Pages/Error404'
/**
 * Contains all route to the app
 * @returns  {React.ReactElement}
 */
export function Navigation() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/P14-HRnet/" element={<Home />} />
                <Route path="/P14-HRnet/employees" element={<Employees />} />
            </Route>
            <Route path="*" element={<Error404 />} />
        </Routes>
    )
}
