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

const LoginPage = () => {
    let navigate = useNavigate();
  const { usersInfo,setLoggedin,loading, getUsersInfo } =
    useContext(AuthContext);

  useEffect(() => {
    getUsersInfo()
  }, [loading]);

  const handleClickDefaultUser = () => {

    // setLoggedin(true); // is it possible?
    navigate('/');

  };

  if (loading) return <LinearProgress color="inherit" />;

  if (!loading && usersInfo)
    return (
      <StyledBox>
        <Typography mt={2} variant="h6">
          Welcome back
        </Typography>
        <h3>{usersInfo[0].username}</h3>
        <Divider variant="middle" />
        <Avatar size="large" src={usersInfo[0].avatar_url} />
        <Button
          onClick={() => {
            handleClickDefaultUser();
          }}
        >
          Login
        </Button>

        <Divider variant="middle" />
        <h6>or Login as</h6>
        <List>
          <ListItem sx={{ border: "1px solid #eee", pr: 5, borderRadius: 2 }}>
            <Avatar size="small" src={usersInfo[1].avatar_url} />
            <Typography ml={2} variant="subtitle2">
              {usersInfo[1].username}
            </Typography>
          </ListItem>
          <ListItem sx={{ border: "1px solid #eee", pr: 5, borderRadius: 2 }}>
            <Avatar size="small" src={usersInfo[2].avatar_url} />
            <Typography ml={2} variant="subtitle2">
              {usersInfo[2].username}
            </Typography>
          </ListItem>
          <ListItem sx={{ border: "1px solid #eee", pr: 5, borderRadius: 2 }}>
            <Avatar size="small" src={usersInfo[3].avatar_url} />
            <Typography ml={3} variant="subtitle2">
              {usersInfo[3].username}
            </Typography>
          </ListItem>
        </List>
      </StyledBox>
    );
};

export default LoginPage;
