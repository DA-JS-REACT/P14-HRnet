import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Employees } from '@/Pages/Employees'
import { Home } from '@/Pages/Home'
import { Layout } from '@/Components/Layout'

export function Navigation() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/employees" element={<Employees />} />
            </Route>
        </Routes>
    )
}
