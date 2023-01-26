import React from 'react'
import { statesField } from '@/Data/data'
import { SelectCustom } from './SelectCustom'
/**
 * Select for generate list of State
 * @returns {React.ReactElement}
 */
export function SelectState() {
    return <SelectCustom label="State" name="state" data={statesField} />
}
