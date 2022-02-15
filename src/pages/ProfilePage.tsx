import { StyledBox } from "../components/Auth/auth.styled";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/authContext";
import {
  Avatar,
  Paper,
  Divider,
  Button,
  ListItemAvatar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { LinearProgress } from "@mui/material";
import { Typography } from "@mui/material";
import {useNavigate  } from 'react-router-dom';

const ProfilePage = () => {

  const { usersInfo,setLoggedin,loading, getUsersInfo } =
    useContext(AuthContext);



  if (loading) return <LinearProgress color="inherit" />;

  if (!loading && usersInfo)
    return (
      <StyledBox>
        <h3>users</h3>


      </StyledBox>
    );
};

export default ProfilePage;
