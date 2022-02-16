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
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  let navigate = useNavigate();
  const {setUserLogin,loading, getUsersInfo,allUsers,} =
    useContext(AuthContext);

  useEffect(() => {
    getUsersInfo();
  },[loading]);

  const handleClickDefaultUser = (e) => {
    e.preventDefault();
    setUserLogin(e.target.value); //username
    navigate("/");
  };

  if (loading) return <LinearProgress color="inherit" />;

  if (!loading && allUsers)
    return (
      <StyledBox>
        <Typography m={2} variant="h6">
          Welcome back
        </Typography>
        <Avatar
          src={allUsers[0].avatar_url}
          sx={{ width: 100, height: 100 }}
        />
        <h3>{allUsers[0].username}</h3>

        <Button
          color="secondary"
          variant="outlined"
          value={allUsers[0].username}
          onClick={(e) => {
            handleClickDefaultUser(e);
          }}
        >
          login
        </Button>

        <Divider variant="middle" />

        <Divider variant="middle" />
        <h6>or Login as</h6>
        <List>
          <ListItem sx={{ border: "1px solid #eee", pr: 5, borderRadius: 2 }}>
            <Avatar size="small" src={allUsers[1].avatar_url} />
            <Typography ml={2} variant="subtitle2">
              {allUsers[1].username}
            </Typography>
          </ListItem>
          <ListItem sx={{ border: "1px solid #eee", pr: 5, borderRadius: 2 }}>
            <Avatar size="small" src={allUsers[2].avatar_url} />
            <Typography ml={2} variant="subtitle2">
              {allUsers[2].username}
            </Typography>
          </ListItem>
          <ListItem sx={{ border: "1px solid #eee", pr: 5, borderRadius: 2 }}>
            <Avatar size="small" src={allUsers[3].avatar_url} />
            <Typography ml={3} variant="subtitle2">
              {allUsers[3].username}
            </Typography>
          </ListItem>
        </List>
      </StyledBox>
    );
};

export default LoginPage;
