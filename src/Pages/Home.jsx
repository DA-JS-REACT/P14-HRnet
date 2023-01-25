import React from 'react'
import { Banner } from '@/Components/Banner'
import { FormRegister } from '@/Components/FormRegister'

/**
 * Home Page
 * @returns {React.ReactElement}
 */
export function Home() {
    return (
        <main className="Home">
            <Banner />
            <section className="Home-form">
                <FormRegister />
            </section>
        </main>
    )
}
