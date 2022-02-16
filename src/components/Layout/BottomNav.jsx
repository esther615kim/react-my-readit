import React,{useState} from 'react';
import {Box,BottomNavigation,BottomNavigationAction} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { StyledBox } from './layout.styled';

const BottomNav = () => {
  const [value, setValue] = useState(0);
  return(
    <StyledBox>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction  icon={<HomeIcon />} />
      <BottomNavigationAction icon={<AddCircleOutlineIcon />} />
      <BottomNavigationAction icon={<NotificationsActiveIcon />} />
    </BottomNavigation>
  </StyledBox>
  )
};

export default BottomNav;




