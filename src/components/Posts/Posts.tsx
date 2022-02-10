import { Paper, Stack, Button } from "@mui/material";
import React,{useEffect, useState} from "react";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Link } from "react-router-dom";
import { StyledDiv } from './posts.styled';

// context에서 articles 불러오기

interface IArticle{
  article_id: number,
  title: string,
  body: string,
  votes: number,
  topic: string,
  created_at:string,
  author:string
  }

const Posts = () => {

  const ARTICLE_ID = 3;

  return (
    <StyledDiv>
      <h3>Recent Posts</h3>
      <Paper>
        <Link to={`/posts/${ARTICLE_ID}`}>
        <h4>title </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus
          assumenda officia itaque in aspernatur autem porro
        </p>
        </Link>
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
