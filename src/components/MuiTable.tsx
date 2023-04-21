import React from 'react'
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material'

export const MuiTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align='center'>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((data) => (
            <TableRow
              key={data.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.first_name}</TableCell>
              <TableCell>{data.last_name}</TableCell>
              <TableCell align='center'>{data.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const tableData = [
  {
    id: 1,
    first_name: 'Ethan',
    last_name: 'Darycott',
    email: 'edarycott0@comcast.net',
    gender: 'Male',
    ip_address: '115.195.150.88',
  },
  {
    id: 2,
    first_name: 'Clo',
    last_name: 'Cordeau]',
    email: 'ccordeau1@a8.net',
    gender: 'Female',
    ip_address: '0.20.164.131',
  },
  {
    id: 3,
    first_name: 'Lucias',
    last_name: 'Gowing',
    email: 'lgowing2@oaic.gov.au',
    gender: 'Male',
    ip_address: '85.135.218.211',
  },
  {
    id: 4,
    first_name: 'Tiler',
    last_name: 'Mangin',
    email: 'tmangin3@wordpress.org',
    gender: 'Male',
    ip_address: '242.137.33.125',
  },
  {
    id: 5,
    first_name: 'Yasmeen',
    last_name: 'Greir',
    email: 'ygreir4@wordpress.org',
    gender: 'Female',
    ip_address: '122.35.110.60',
  },
  {
    id: 6,
    first_name: 'Sibeal',
    last_name: 'Gozney',
    email: 'sgozney5@ibm.com',
    gender: 'Female',
    ip_address: '146.112.49.104',
  },
  {
    id: 7,
    first_name: 'Shela',
    last_name: 'Meys',
    email: 'smeys6@smugmug.com',
    gender: 'Female',
    ip_address: '46.216.219.135',
  },
  {
    id: 8,
    first_name: 'Nealson',
    last_name: 'Doudny',
    email: 'ndoudny7@issuu.com',
    gender: 'Male',
    ip_address: '212.17.26.150',
  },
  {
    id: 9,
    first_name: 'Lennie',
    last_name: 'Newsome',
    email: 'lnewsome8@yahoo.com',
    gender: 'Male',
    ip_address: '152.143.189.129',
  },
  {
    id: 10,
    first_name: 'Dom',
    last_name: 'Gurdon',
    email: 'dgurdon9@thetimes.co.uk',
    gender: 'Male',
    ip_address: '121.156.167.195',
  },
]
