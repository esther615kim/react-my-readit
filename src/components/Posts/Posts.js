import { Paper, Stack, Button } from "@mui/material";
import React,{useEffect, useState,useContext} from "react";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Link } from "react-router-dom";
import { StyledDiv } from './posts.styled';
import { getAllPosts } from './../../utils/api';


const Posts = () => {
  const [articles, setArticles] = useState([]);

  useEffect(()=>{
    getAllPosts()
       .then((res)=>{
             setArticles(res);
       })
  },[])

  console.log("아티클",articles[0]);


  const ARTICLE_ID = 3;

  return (
    <StyledDiv>
      {articles?(
        articles.map(item =>{
          return <Paper className="post-box">
          <Link to={`/posts/${item.article_id}`}>
          <h4>{item.title}</h4>
          <p>
            {item.body}
          </p>
          </Link>
          <Stack className="stack"
            pb={1}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Button startIcon={<FavoriteBorderIcon />}>
              {item.votes} liked
            </Button>
            <Button startIcon={<MessageIcon />}>{item.comment} comments</Button>
          </Stack>
         </Paper>
        })
      ):(
        <h3>loading...</h3>
      )}
     
    </StyledDiv>
  );
};

export default Posts;
