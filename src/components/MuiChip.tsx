import React from 'react'
import { Stack, Chip, Avatar } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'

export const MuiChip = () => {
  const [array, setArray] = React.useState(['Chip 1', 'Chip 2', 'Chip 3'])
  const handleDelete = (chipToDelete: string) => {
    setArray((chips) => chips.filter((chip) => chip !== chipToDelete))
  }
  return (
    <Stack p={2} direction='row' spacing={1}>
      <Chip label='chip' color='primary' />
      <Chip label='chip' color='primary' size='small' variant='outlined' />
      <Chip
        label='Marko Samardzija'
        color='secondary'
        size='small'
        variant='outlined'
        avatar={<Avatar></Avatar>}
      />
      <Chip label='chip' color='primary' size='small' icon={<FaceIcon />} />
      <Chip
        label='click'
        color='success'
        size='small'
        onClick={() => alert('Clicked')}
      />
      <Chip
        label='Delete'
        color='error'
        onClick={() => alert('YoYo')}
        onDelete={() => alert('Delete handler called')}
      />
      {array.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  )
}
