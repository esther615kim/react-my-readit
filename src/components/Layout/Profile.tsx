import React,{useContext} from 'react';
import FaceIcon from '@mui/icons-material/Face';
import { IconButton } from '@mui/material';
import AuthContext from '../../contexts/authContext';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import { StyledDiv } from './layout.styled';

const Profile = () => {

  const {loggedin} = useContext(AuthContext);

  return <StyledDiv>
     <Link to={loggedin?"profile": "login"} >

      <IconButton>
         {loggedin? <FaceIcon />:<ExitToAppIcon/> }
      </IconButton>
      <h4 className="title">
        {loggedin? "my reddit":"login"}
      </h4>
      </Link>
  </StyledDiv>;
};

export default Profile;

<h3>my readit</h3>