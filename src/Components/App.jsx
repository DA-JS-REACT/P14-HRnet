import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Navigation } from '@/Components/Navigation'

/**
 * Start App
 * @returns {React.ReactElement}
 */
export function App() {
    return (
        <div className="App">
            <HashRouter>
                <Navigation />
            </HashRouter>
        </div>
    )
}
