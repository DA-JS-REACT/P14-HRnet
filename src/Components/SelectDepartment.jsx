import React from 'react'
import { SelectCustom } from '@/Components/SelectCustom'
import { departmentField } from '@/Data/data'

/**
 * Select for generate list of Department
 * @returns {React.ReactElement}
 */
export function SelectDepartment() {
    return (
        <SelectCustom
            label="Department"
            name="department"
            data={departmentField}
        />
    )
}
