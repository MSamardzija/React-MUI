import React from 'react'
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'

export const MuiBottomNavigation = () => {
  const [value, setValue] = React.useState(0)
  return (
    <BottomNavigation
      sx={{ width: '100%', position: 'absolute', bottom: 0 }}
      value={value}
      onChange={(event, NewValue) => setValue(NewValue)}
    >
      <BottomNavigationAction label='home' icon={<HomeIcon />} />
      <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
      <BottomNavigationAction label='Profile' icon={<PersonIcon />} />
    </BottomNavigation>
  )
}
