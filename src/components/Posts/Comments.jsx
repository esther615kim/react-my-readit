import React,{useContext,useState,useEffect} from 'react'
import { Divider, OutlinedInput, FormControl,Button, Avatar,Box,LinearProgress,Stack} from "@mui/material";
import { StyledDiv, StyledStack } from './comments.styled';
import CommentContext from '../../contexts/comments/commentContext';
import { setupListeners } from '@reduxjs/toolkit/query';
import { getCommentsByPost } from '../../utils/api';

import {ArrowUpward, ArrowDownward} from '@mui/icons-material';

const Comments = ({id}) => {
  const [comments, setComments] = useState(null);

    useEffect(()=>{
        // setFetchedComments();
        getCommentsByPost(id)
        .then((updated)=>{
          setComments(updated);
          
        })
        comments && console.log(comments);

    },[id])

    if(!comments) return (
      <StyledDiv>
        <Divider/>
        <LinearProgress color="inherit" />
      </StyledDiv>
    )

  if(comments.length) return (
    <StyledDiv>
        <Divider/>
        <h4>{comments.length} comments</h4>

        {/* INPUT  */}
      <FormControl sx={{ width:"100%"}}>
        <OutlinedInput rows={3} multiline placeholder="Write your comment" />
        <Button className="submit" variant="contained" color="inherit" size="small">
            Submit
        </Button>
              {/* COMMENT LIST */}
      </FormControl>
      {comments.map((item)=>{
        return(
          <Box key={item.comment_id}>
          <div className="user-box">
          <Avatar sx={{width:26,height:26,marginRight:1}}/>
          <div>
          <h5>{item.author}</h5>
          <h6>{item.created_at}</h6>
              </div>
              <StyledStack   direction="row"
  justifyContent="center"
  alignItems="center">
              <ArrowUpward className="arrow" color="warning" size="small"/>
                <span>{item.votes}</span>
                <ArrowDownward className="arrow" color="primary" size="small"/>
                </StyledStack>  
          </div>
            <p>{item.body}</p>

          <Divider/>
      </Box>
        )
      })
      }

  </StyledDiv>
  )
}

export default Comments