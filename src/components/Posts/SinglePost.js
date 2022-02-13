import { Paper, Stack, Avatar, Typography, Container } from "@mui/material";
import React from "react";
import { StyledBox } from "./posts.styled";
import { useParams, useLocation } from "react-router-dom";
import { Chip } from "@mui/material/";
import { lime } from "@mui/material/colors";
import Comments from './Comments/index';

const SinglePost = ({ item }) => {
  const { id } = useParams();
  const location = useLocation();
  const { from } = location.state;

  console.log(id, item);
  return (
    <StyledBox>
      <div className="author-box">
        <Avatar
          className="svg"
          // src="/static/images/avatar/1.jpg"
          sx={{ bgcolor: lime[200], width: 50, height: 50 }}
        ></Avatar>
        <h5>{from.author}</h5>
      </div>
      <Paper sx={{ minHeight: "80vh", p: 3 }}>
        <Container>
          <h3>{from.title}</h3>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Chip label={from.topic} variant="outlined" size="small" />
            <Typography variant="button">{from.created_at}</Typography>
          </Stack>

          <p>{from.body}</p>

          {/* COMMENTS */}
          <Comments id={id} />
        </Container>
      </Paper>
    </StyledBox>
  );
};

export default SinglePost;
