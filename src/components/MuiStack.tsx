import React from 'react'
import { Box, Stack, Divider } from '@mui/material'

export const MuiStack = () => {
  return (
    //Stack is useful for one dimantional layouts
    <Stack
      sx={{
        border: '1px solid ',
      }}
      direction='row'
      spacing={2}
      divider={<Divider orientation='vertical' flexItem />}
    >
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
    </Stack>
  )
}
