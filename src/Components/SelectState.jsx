import React from 'react'
import { statesField } from '@/Data/data'
import { SelectCustom } from '@/Components/SelectCustom'
/**
 * Select for generate list of State
 * @returns {React.ReactElement}
 */
export function SelectState() {
    return (
        <SelectCustom label="State" name="address.state" data={statesField} />
    )
}
