import React, {  useState, useEffect,useContext} from "react";
import {
  Divider,
  OutlinedInput,
  FormControl,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";
import { StyledDiv} from "./comments.styled";
import { getCommentsByPost } from '../../../utils/api';
import CommentCard from './CommentCard.';
import CommentForm from './CommentForm';
import { postComment } from './../../../utils/api';
import AuthContext from '../../../contexts/authContext';

const Comments = ({ id }) => {
  const [comments, setComments] = useState(null);
  const { username } = useContext(AuthContext);

  useEffect(() => {

    getCommentsByPost(id).then((updated) => {
      setComments(updated);
    });

  }, [id]);

  const addNewComment =(newComment)=>{
    postComment(id,username,newComment);

    getCommentsByPost(id).then((updated) => {
      setComments(updated);
    });
    
  }

  if (!comments)
    return (
      <StyledDiv>
        <Divider />
        <LinearProgress color="inherit" />
      </StyledDiv>
    );

  if (comments.length)
    return (
      <StyledDiv>
        <Divider />
        <h4>{comments.length} comments</h4>
        <CommentForm addNewComment={addNewComment}/>
        <CommentCard id={id} comments={comments}/>
      </StyledDiv>
    );
};

export default Comments;
