import { Paper, Stack, Button } from "@mui/material";
import React,{useEffect, useState} from "react";
import { StyledDiv } from "./posts.styled";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from 'axios';
import { Link } from "react-router-dom";

// data 타입정의하기

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

  const [articles,setArticles] = useState<IArticle[]|null>(null);
  useEffect(()=>{
    axios.get("https://ek-reddit.herokuapp.com/api/articles")
    .then(({data})=>{
      console.log(data.articles);
    });
  },[])

  
  
  return (
    <StyledDiv>
      <h3>Recent Posts</h3>
      <Paper>
        <Link to="/">
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
        </Link>
      </Paper>
    </StyledDiv>
  );
};

export default Posts;
