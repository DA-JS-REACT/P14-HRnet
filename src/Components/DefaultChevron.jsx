import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
/**
 *  chevron for table  when sort isn't active
 * @returns  {React.ReactElement}
 */
export function DefaultChevron() {
    return (
        <div className="default-chevron">
            <FaChevronUp />
            <FaChevronDown />
        </div>
    )
}
