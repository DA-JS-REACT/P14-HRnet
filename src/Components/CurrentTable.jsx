import React, { useState } from 'react'

import { CompactTable } from '@table-library/react-table-library/compact'
import { useTheme } from '@table-library/react-table-library/theme'
import { getTheme } from '@table-library/react-table-library/baseline'
import { usePagination } from '@table-library/react-table-library/pagination'
import {
    useSort,
    SortToggleType,
} from '@table-library/react-table-library/sort'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

import PropTypes from 'prop-types'
import { DefaultChevron } from './DefaultChevron'
import { isEmpty } from '../_helpers/Empty'
/**
 * Table dor display current employees
 * @prop {array} nodes - data which receive  to the server
 * @returns {React.ReactElement}
 */
export function CurrentTable({ nodes }) {
    const [search, setSearch] = useState('')
    const theme = useTheme([
        getTheme(),
        {
            HeaderCell: `
            display:flex;
            flex-direction: column;

            `,

            Cell: `
            padding:8px 16px;
            text-align:center;
            color:black;
          `,
            HeaderRow: `
            font-weight: bold;
            font-size:20px;
            background-color: white;
        `,
            Row: `
          &:nth-of-type(odd) {
            background-color: #f2f5e2;
          }
          &:nth-of-type(even) {
            background-color: white;
          }
          .td {
            border-bottom: 1px solid rgba(175, 168, 168, 0.123);
          }
        `,
        },
    ])
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    // Initialize Data  with function search
    const data = {
        nodes: nodes.filter(
            (item) =>
                item.lastName.toLowerCase().includes(search.toLowerCase()) ||
                item.firstName.toLowerCase().includes(search.toLowerCase()) ||
                item.department.toLowerCase().includes(search.toLowerCase()) ||
                item.address.city
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                item.address.street
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                item.address.state
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                item.address.zipCode
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                new Date(item.startdate).getFullYear() == search ||
                new Date(item.birthdate).getFullYear() == search
        ),
    }
    // for pagniation
    const pagination = usePagination(data, {
        state: {
            page: 0,
            size: 10,
        },
        onChange: onPaginationChange,
    })

    // config to display the number of items per page
    const sizes = [10, 20, 50]

    // ? may be util or not
    function onPaginationChange(action, state) {
        console.log(action, state)
    }

    // config function to sort columns
    const sort = useSort(
        data,
        {
            onChange: onSortChange,
        },
        {
            sortIcon: {
                iconDefault: <DefaultChevron />,
                iconUp: <FaChevronUp fontSize={'small'} />,
                iconDown: <FaChevronDown fontSize={'small'} />,
            },
            sortToggleType: SortToggleType.AlternateWithReset,
            sortFns: {
                FIRSTNAME: (array) =>
                    array.sort((a, b) =>
                        a.firstName.localeCompare(b.firstName)
                    ),
                LASTNAME: (array) =>
                    array.sort((a, b) => a.lastName.localeCompare(b.lastName)),
                STARTDATE: (array) =>
                    array.sort(
                        (a, b) =>
                            new Date(a.startdate).getTime() -
                            new Date(b.startdate).getTime()
                    ),
                DATEOFBIRTH: (array) =>
                    array.sort(
                        (a, b) =>
                            new Date(a.birthdate).getTime() -
                            new Date(b.birthdate).getTime()
                    ),
                DEPARTMENT: (array) =>
                    array.sort((a, b) =>
                        a.department.localeCompare(b.department)
                    ),
                STREET: (array) =>
                    array.sort((a, b) =>
                        a.address.street.localeCompare(b.address.street)
                    ),
                CITY: (array) =>
                    array.sort((a, b) =>
                        a.address.city.localeCompare(b.address.city)
                    ),
                STATE: (array) =>
                    array.sort((a, b) =>
                        a.address.state.localeCompare(b.address.state)
                    ),
                ZIPCODE: (array) =>
                    array.sort((a, b) => {
                        const max = a.address.zipCode.split('-')
                        const min = b.address.zipCode.split('-')

                        return max[0] - min[0]
                    }),
            },
        }
    )

    // ? may be util or not
    function onSortChange(action, state) {
        console.log(action, state)
    }

    // Config  for display
    const COLUMNS = [
        {
            label: 'First Name',
            renderCell: (item) => item.firstName,
            sort: { sortKey: 'FIRSTNAME' },
        },
        {
            label: 'Last Name',
            renderCell: (item) => item.lastName,
            sort: { sortKey: 'LASTNAME' },
        },
        {
            label: 'Start Date',
            renderCell: (item) => item.startdate,
            sort: { sortKey: 'STARTDATE' },
        },
        {
            label: 'Department',
            renderCell: (item) => item.department,
            sort: { sortKey: 'DEPARTMENT' },
        },
        {
            label: 'Date of birth',
            renderCell: (item) => item.birthdate,
            sort: { sortKey: 'DATEOFBIRTH' },
        },
        {
            label: 'Street',
            renderCell: (item) => item.address.street,
            sort: { sortKey: 'STREET' },
        },
        {
            label: 'City',
            renderCell: (item) => item.address.city,
            sort: { sortKey: 'CITY' },
        },
        {
            label: 'State',
            renderCell: (item) => item.address.state,
            sort: { sortKey: 'STATE' },
        },
        {
            label: 'Zip Code',
            renderCell: (item) => item.address.zipCode,
            sort: { sortKey: 'ZIPCODE' },
        },
    ]

    return (
        <div className="table-wrapper">
            <div className="table-header">
                <div className="header-itemSize">
                    <label htmlFor="itemSize">Page Size:</label>

                    <select name="itemSize" id="itemSize">
                        {sizes.map((size) => (
                            <option
                                key={size}
                                style={{
                                    fontWeight:
                                        pagination.state.size === size
                                            ? 'bold'
                                            : 'normal',
                                }}
                                onClick={() => pagination.fns.onSetSize(size)}
                                value=""
                            >
                                {size}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="header-search">
                    <label htmlFor="search">Search:</label>
                    <input
                        id="search"
                        type="text"
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <CompactTable
                columns={COLUMNS}
                data={data}
                theme={theme}
                pagination={pagination}
                sort={sort}
            />
            <br />
            <div className="table-footer">
                <div className="footer-info">
                    <span>
                        Total Pages:{' '}
                        {pagination.state.getTotalPages(data.nodes)}
                    </span>
                    <span>
                        showing :{pagination.state.size} of {data.nodes.length}{' '}
                        entries
                    </span>
                </div>

                <div className="footer-pagination">
                    <button
                        type="button"
                        disabled={pagination.state.page === 0}
                        onClick={() =>
                            pagination.fns.onSetPage(pagination.state.page - 1)
                        }
                    >
                        Previous
                    </button>
                    <p>{pagination.state.page + 1}</p>
                    <button
                        type="button"
                        disabled={
                            pagination.state.page + 1 ===
                            pagination.state.getTotalPages(data.nodes)
                        }
                        onClick={() =>
                            pagination.fns.onSetPage(pagination.state.page + 1)
                        }
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

CurrentTable.defaultProps = {
    nodes: [
        {
            firstName: '',
            lastName: '',
            birthdate: '',
            startdate: '',
            address: {
                street: '',
                city: '',
                state: '',
                zipCode: '',
            },
            department: '',
        },
    ],
}
CurrentTable.propTypes = {
    nodes: PropTypes.arrayOf(
        PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            birthdate: PropTypes.string,
            startdate: PropTypes.string,
            address: PropTypes.shape({
                street: PropTypes.string,
                city: PropTypes.string,
                state: PropTypes.string,
                zipCode: PropTypes.string,
            }),

            department: PropTypes.string,
        })
    ).isRequired,
}
