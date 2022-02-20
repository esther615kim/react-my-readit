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
  const navigate = useNavigate();
  const {setUserLogin,loading, getAllUsersInfo,allUsers,} =
    useContext(AuthContext);

  useEffect(() => {
    getAllUsersInfo();
  },[loading]);

  const handleClickLoginButton = (e) => {
    e.preventDefault();
    e.target.value ? setUserLogin(e.target.value) : setUserLogin(e.nativeEvent.target.textContent);
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
          onClick={handleClickLoginButton}
        >
          login
        </Button>

        <Divider variant="middle" />

        <Divider variant="middle" />
        <h6>or Login as</h6>
        <List>
          <ListItem sx={{ border: "1px solid #eee", pr: 5, borderRadius: 2 }}>
            <Avatar size="small" src={allUsers[1].avatar_url} />
            <Typography ml={2}
            onClick={handleClickLoginButton}
             variant="subtitle2">
              {allUsers[1].username}
            </Typography>
          </ListItem>

          <ListItem sx={{ border: "1px solid #eee", pr: 5, borderRadius: 2 }}>
            <Avatar size="small" src={allUsers[2].avatar_url} />
            <Typography ml={2} variant="subtitle2">
              {allUsers[2].username}
            </Typography>
          </ListItem>
        </List>
      </StyledBox>
    );
};

export default LoginPage;
