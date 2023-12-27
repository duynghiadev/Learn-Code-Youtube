import React from 'react'

import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'country', headerName: 'Country', width: 200 },
  { field: 'age', headerName: 'Age', width: 200 },
  { field: 'job', headerName: 'Job', width: 200 },
]

const rows = [
  { id: 1, name: 'Jon Snow', age: 35, country: 'Australia', job: 'Engineer' },
  {
    id: 2,
    name: 'Lannister',
    age: 25,
    country: 'America',
    job: 'Web Designer',
  },
  { id: 3, name: 'Stark', age: 15, country: 'England', job: 'IT Advisor' },
  { id: 4, name: 'Peter White', age: 30, country: 'Thailand', job: 'Engineer' },
  {
    id: 5,
    name: 'Alice Smith',
    age: 25,
    country: 'Poland',
    job: 'Engineer IT',
  },
]

const Summary = () => {
  return (
    <div style={{ height: 500, width: '80%', margin: 'auto' }}>
      <Typography variant='h2' align='center' gutterBottom>
        Summary
      </Typography>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}

export default Summary
