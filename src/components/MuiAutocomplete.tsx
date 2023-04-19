import React from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material'

const skilss = ['HTML', 'CSS', 'JS', 'TypeScript', 'React']

export const MuiAutocomplete = () => {
  const [value, setValue] = React.useState<string | null>(null)
  return (
    <Stack spacing={2} width='250px'>
      <Autocomplete
        options={skilss}
        renderInput={(params) => <TextField {...params} label='Skills' />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
      />
    </Stack>
  )
}
