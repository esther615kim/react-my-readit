import { Paper, Stack, Button, Chip } from "@mui/material";
import React, { useEffect, useState, } from "react";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

import { getAllPosts, getTopics } from "./../../utils/api";

const PostCard = ({articles,selected}) => {
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        if(selected){
            const updatedCards = articles.filter(item => item.topic === selected);
            setCards(updatedCards);
        }else{
            setCards(articles);
        }
    },[selected]);
    console.log(selected);
    
  return (
    <>
      {cards ? (
        cards
        .map((item) => {
          return (
            <Paper key={item.article_id} className="post-box">
              <Link to={`/posts/${item.article_id}`}>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </Link>
              <Stack
                className="stack"
                pb={1}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Button startIcon={<FavoriteBorderIcon />}>
                  {item.votes} liked
                </Button>
                <Button startIcon={<MessageIcon />}>
                  {item.comment} comments
                </Button>
              </Stack>
            </Paper>
          );
        })
      ) : (
        <h3>loading...</h3>
      )}
    </>
  );
};

export default PostCard;
