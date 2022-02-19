import React, {  useState, useEffect,useContext,useCallback} from "react";
import {
  Divider,
  OutlinedInput,
  FormControl,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";
import { StyledDiv} from "./comments.styled";
import { deleteComment, getCommentsByPost} from '../../../utils/api';
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
      comments && console.log(comments);
    });  
  }


  const deleteAComment =(comment_id)=>{
    deleteComment(comment_id)
    .then(()=>{
      getCommentsByPost(id).then((updated) => {
        setComments(updated);
      });
    })
       
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
        <CommentCard comments={comments}
        deleteAComment ={deleteAComment}
        />
      </StyledDiv>
    );
};

export default Comments;
