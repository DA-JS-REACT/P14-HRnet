import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployees } from '@/_services/employees.action'
import { selectEmployees } from '@/_helpers/selectors'
import { CurrentTable } from '../Components/CurrentTable'
import { isEmpty } from '../_helpers/Empty'

/**
 * Employees Page
 * @returns {React.ReactElement}
 */
export function Employees() {
    const dispatch = useDispatch()
    const employees = useSelector(selectEmployees)
    const flag = useRef(false)
    if (!isEmpty(employees)) {
        console.log(employees.employeesInfo)
    }

    useEffect(() => {
        if (flag.current === false) {
            dispatch(getEmployees())
        }
        return () => (flag.current = true)
    }, [])
    return (
        <section className="Employees">
            {!isEmpty(employees.employeesInfo) ? (
                <CurrentTable nodes={employees.employeesInfo} />
            ) : (
                ''
            )}
        </section>
    )
}
