import React from 'react'
import { Banner } from '@/Components/Banner'
import { FormRegister } from '@/Components/FormRegister'
import { Database } from '../Data/Database'
import { getFirestore } from 'firebase/firestore/lite'
import { useEffect } from 'react'
import { createEmployees } from '../_faker/faker'

/**
 * Home Page
 * @returns {React.ReactElement}
 */
export function Home() {
    const db = getFirestore(Database)
    useEffect(() => {
        // createEmployees(db)
    }, [])

    return (
        <main className="Home">
            <Banner />
            <section className="Home-form">
                <FormRegister />
            </section>
        </main>
    )
}
