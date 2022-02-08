import { Paper, Stack, Button } from "@mui/material";
import React from "react";
import { StyledDiv } from "./posts.styled";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Posts = () => {
  return (
    <StyledDiv>
      <h3>Recent Posts</h3>
      <Paper>
        <h4>title </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus
          assumenda officia itaque in aspernatur autem porro
        </p>
        <Stack
          pb={1}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Button color="warning" startIcon={<FavoriteBorderIcon />}>
            32 liked
          </Button>
          <Button startIcon={<MessageIcon />}>9 comments</Button>
        </Stack>
      </Paper>

      <Paper>
        <h4>title </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus
          assumenda officia itaque in aspernatur autem porro
        </p>
        <Stack
          pb={1}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Button color="warning" startIcon={<FavoriteBorderIcon />}>
            32 liked
          </Button>
          <Button startIcon={<MessageIcon />}>9 comments</Button>
        </Stack>
      </Paper>
    </StyledDiv>
  );
};

export default Posts;
