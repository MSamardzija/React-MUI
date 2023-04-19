import React from 'react'

import { Box } from '@mui/material'

export const MuiBox = () => {
  return (
    <>
      {' '}
      <Box
        //   component='span'
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}
      >
        You what is this
      </Box>
      <Box
        display='flex'
        height='100px'
        width='100px'
        bgcolor='success.light'
        p={2}
      >
        Okay
      </Box>
    </>
  )
}
