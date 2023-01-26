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

// const nodes = [
//     {
//         id: '0',
//         name: 'Shopping List',
//         deadline: new Date(2020, 1, 15),
//         type: 'TASK',
//         isComplete: true,
//         nodes: 3,
//     },
// ]

export function CurrentTable({ nodes }) {
    const [search, setSearch] = useState('')
    const theme = useTheme([
        getTheme(),
        {
            BaseCell: `
            text-align: center;
            `,
            Cell: `
            padding:8px 16px;
          `,
            HeaderRow: `
            font-weight: bold;
            font-size:20px;
            background-color: white;
        `,
            Row: `
          &:nth-of-type(odd) {
            background-color: rgba(175, 168, 168, 0.123);
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
    const data = {
        nodes: nodes.filter((item) =>
            item.lastName.toLowerCase().includes(search.toLowerCase())
        ),
    }

    const pagination = usePagination(data, {
        state: {
            page: 0,
            size: 10,
        },
        onChange: onPaginationChange,
    })
    const sizes = [10, 20, 50]

    function onPaginationChange(action, state) {
        console.log(action, state)
    }
    const sort = useSort(
        data,
        {
            onChange: onSortChange,
        },
        {
            sortIcon: {
                iconDefault: null,
                iconUp: <FaChevronUp />,
                iconDown: <FaChevronDown />,
            },
            sortToggleType: SortToggleType.AlternateWithReset,
            sortFns: {
                FIRSTNAME: (array) =>
                    array.sort((a, b) =>
                        a.firstName.localeCompare(b.firstName)
                    ),
                LASTNAME: (array) =>
                    array.sort((a, b) => a.lastName.localeCompare(b.lastName)),
                DEPARTMENT: (array) =>
                    array.sort((a, b) =>
                        a.department.localeCompare(b.department)
                    ),
            },
        }
    )
    function onSortChange(action, state) {
        console.log(action, state)
    }
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
        },
        {
            label: 'Department',
            renderCell: (item) => item.department,
            sort: { sortKey: 'DEPARTMENT' },
        },
        {
            label: 'Date of birth',
            renderCell: (item) => item.birthdate,
        },
        {
            label: 'Street',
            renderCell: (item) => item.address.street,
        },
        {
            label: 'City',
            renderCell: (item) => item.address.city,
        },
        {
            label: 'State',
            renderCell: (item) => item.address.state,
        },
        {
            label: 'Zip Code',
            renderCell: (item) => item.address.zipCode,
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
                    <label htmlFor="search">Search by Last Name:</label>
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
                <span>
                    Total Pages: {pagination.state.getTotalPages(data.nodes)}{' '}
                    nombre: {data.nodes.length}
                </span>
                {/* 
                <span>
                    Page:{' '}
                    {pagination.state.getPages(data.nodes).map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            style={{
                                fontWeight:
                                    pagination.state.page === index
                                        ? 'bold'
                                        : 'normal',
                            }}
                            onClick={() => pagination.fns.onSetPage(index)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </span> */}
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
CurrentTable.propTypes = {
    nodes: PropTypes.array.isRequired,
}
