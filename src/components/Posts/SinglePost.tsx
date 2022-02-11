import { Paper, Stack, Button } from "@mui/material";
import React from "react";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { StyledDiv } from './posts.styled';


interface IArticle{
  article_id: number,
  title: string,
  body: string,
  votes: number,
  topic: string,
  created_at:string,
  author:string
  }

const SinglePost= () => {

  const ARTICLE_ID = 3;

  
  return (
    <StyledDiv >
      <h3>Single Post</h3>
      <Paper style={{height:"80%"}}>
        <h4>title </h4>
        <p>
        This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.
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

export default SinglePost;
