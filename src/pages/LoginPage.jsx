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
  const { allusersInfo, setLoggedin, loading, getUsersInfo } =
    useContext(AuthContext);

  useEffect(() => {
    getUsersInfo();
  }, [loading]);

  const handleClickDefaultUser = () => {
    // setLoggedin(true); // is it possible?
    navigate("/");
  };

  if (loading) return <LinearProgress color="inherit" />;

  if (!loading && allusersInfo)
    return (
      <StyledBox>
        <Typography m={2} variant="h6">
          Welcome back
        </Typography>
        <Avatar
          src={allusersInfo[0].avatar_url}
          sx={{ width: 100, height: 100 }}
        />
        <h3>{allusersInfo[0].username}</h3>

        <Button
          color="secondary"
          variant="outlined"
          onClick={() => {
            handleClickDefaultUser();
          }}
        >
          login
        </Button>

        <Divider variant="middle" />

        <Divider variant="middle" />
        <h6>or Login as</h6>
        <List>
          <ListItem sx={{ border: "1px solid #eee", pr: 5, borderRadius: 2 }}>
            <Avatar size="small" src={allusersInfo[1].avatar_url} />
            <Typography ml={2} variant="subtitle2">
              {allusersInfo[1].username}
            </Typography>
          </ListItem>
          <ListItem sx={{ border: "1px solid #eee", pr: 5, borderRadius: 2 }}>
            <Avatar size="small" src={allusersInfo[2].avatar_url} />
            <Typography ml={2} variant="subtitle2">
              {allusersInfo[2].username}
            </Typography>
          </ListItem>
          <ListItem sx={{ border: "1px solid #eee", pr: 5, borderRadius: 2 }}>
            <Avatar size="small" src={allusersInfo[3].avatar_url} />
            <Typography ml={3} variant="subtitle2">
              {allusersInfo[3].username}
            </Typography>
          </ListItem>
        </List>
      </StyledBox>
    );
};

export default LoginPage;
