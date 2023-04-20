import { Stack, Link, Typography } from '@mui/material'
export const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
      <Link href='#'>Link</Link>
      <Link href='#' color='secondary'>
        Secondary link
      </Link>
      <Typography variant='h6'>
        <Link underline='none'>Inherits h6 element size</Link>
      </Typography>
    </Stack>
  )
}
