import React,{useContext} from 'react';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledDiv } from './layout.styled';
import AuthContext from '../../contexts/authContext';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FaceIcon from '@mui/icons-material/Face';

const Profile = () => {

  const {loggedin,username} = useContext(AuthContext);

  return <StyledDiv>
     <Link to={loggedin?"profile": "login"} >

      <IconButton>
         {loggedin? <FaceIcon />:<ExitToAppIcon/> }
      </IconButton>
      <h4 className="title">
        {loggedin?`${username}'s readit`:"login"}
      </h4>
      </Link>
  </StyledDiv>;
};

export default Profile;
