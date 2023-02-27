import { Footer } from '@/Components/Footer'
import { Header } from '@/Components/Header'
import { HashRouter as Router } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import { describe } from '@jest/globals'
// import { FormRegister } from '../Components/FormRegister'

describe('Home Page', () => {
    it('Should render header without crash', async () => {
        render(
            <Router>
                <Header />
            </Router>
        )
        const titleElement = screen.getByText('HRnet')
        expect(titleElement).toBeInTheDocument()
    })
    // it('Should render without form crash', async () => {
    //     const handleSubmit = jest.fn()
    //     render(<FormRegister onSubmit={handleSubmit} />)
    //     const user = userEvent.setup()

    //     await user.type(
    //         screen.getByRole('textbox', { name: /first name/i }),
    //         'John'
    //     )
    //     await user.type(
    //         screen.getByRole('textbox', { name: /last name/i }),
    //         'Dee'
    //     )

    //     await user.click(screen.getByRole('button', { name: /submit/i }))

    //     await waitFor(() =>
    //         expect(handleSubmit).toHaveBeenCalledWith({
    //             firstName: 'John',
    //             lastName: 'Dee',
    //         })
    //     )
    // })

    it('Should render without footer crash', async () => {
        render(<Footer />)
        const copyrightElement = screen.getByText('Copyright © 2023')
        expect(copyrightElement).toBeInTheDocument()
    })
})
