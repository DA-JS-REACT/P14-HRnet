import React, { useEffect } from 'react'
import { Banner } from '@/Components/Banner'
import { FormRegister } from '@/Components/FormRegister'
// import { createEmployees } from '../_faker/faker'
// import { getData } from '../_faker/faker'
// import { Database } from '../Data/Database'
// import { getFirestore } from 'firebase/firestore'

/**
 * Home Page
 * @returns {React.ReactElement}
 */
export function Home() {
    // const db = getFirestore(Database)
    useEffect(() => {
        // getData()
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
