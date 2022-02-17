import React,{useState} from 'react';

import {BottomNavigation,BottomNavigationAction} from '@mui/material';
import { StyledBox } from './layout.styled';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';

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
      <Link to={'/'}>
      <BottomNavigationAction  icon={<HomeIcon />} />
      </Link>
      <BottomNavigationAction icon={<AddCircleOutlineIcon />} />
      <Link to={'/profile'}>
      <BottomNavigationAction icon={<PersonIcon/>} />
      </Link>
    </BottomNavigation>
  </StyledBox>
  )
};

export default BottomNav;




