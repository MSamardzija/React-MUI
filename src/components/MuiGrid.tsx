import React from 'react'
import { Box, Stack, Divider, Grid, Paper } from '@mui/material'

export const MuiGrid = () => {
  return (
    // Paper adds shaddow with rounded border
    // Elevation for more shaddow
    <Paper sx={{ padding: '32px' }} elevation={8}>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='primary.light' p={2}>
            item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='primary.light' p={2}>
            item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='primary.light' p={2}>
            item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor='primary.light' p={2}>
            item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
