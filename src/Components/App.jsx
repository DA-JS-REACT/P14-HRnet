import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navigation } from '@/Components/Navigation'

/**
 * Start App
 * @returns {React.ReactElement}
 */
export function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        </div>
    )
}
