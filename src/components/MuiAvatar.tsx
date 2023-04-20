import React from 'react'
import { Stack, Avatar, AvatarGroup } from '@mui/material'

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={1} p={2}>
        <Avatar sx={{ backgroundColor: 'primary.light' }}>BW</Avatar>
        <Avatar sx={{ backgroundColor: 'success.light' }}>CK</Avatar>
      </Stack>
      <Stack direction='row' spacing={1} p={2}>
        <AvatarGroup max={3}>
          <Avatar sx={{ backgroundColor: 'primary.light' }}>BW</Avatar>
          <Avatar sx={{ backgroundColor: 'success.light' }}>CK</Avatar>
          <Avatar
            src='https://randomuser.me/api/portraits/women/79.jpg'
            alt='Jana Doe'
          />
          <Avatar
            src='https://randomuser.me/api/portraits/men/51.jpg'
            alt='Jana Doe'
          />
        </AvatarGroup>
      </Stack>
      <Stack direction='row' spacing={1} p={2}>
        <Avatar
          sx={{ backgroundColor: 'primary.light', width: 48, height: 48 }}
          variant='square'
        >
          BW
        </Avatar>
        <Avatar
          sx={{ backgroundColor: 'success.light', width: 48, height: 48 }}
          variant='rounded'
        >
          CK
        </Avatar>
      </Stack>
    </Stack>
  )
}
