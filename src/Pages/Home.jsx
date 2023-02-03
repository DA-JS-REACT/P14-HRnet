import React from 'react'
import { Banner } from '@/Components/Banner'
import { FormRegister } from '@/Components/FormRegister'
import { useModal, Modal } from '@fredmagione/modals-react-components'

/**
 * Home Page
 * @returns {React.ReactElement}
 */
export function Home() {
    const { isShowing, toggle } = useModal()
    return (
        <main className="Home">
            <Banner />
            <section className="Home-form">
                <FormRegister />
                <button className="modal-toggle" onClick={toggle}>
                    Show modal
                </button>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                    title="Employe(e)s Created"
                    keydown={{ active: true, key: 'Escape' }}
                />
            </section>
        </main>
    )
}
