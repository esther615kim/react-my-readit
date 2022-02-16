import React, {  useState, useEffect } from "react";
import {
  Divider,
  OutlinedInput,
  FormControl,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";
import { StyledDiv} from "./comments.styled";
import CommentCard from './CommentCard.';
import { getCommentsByPost } from '../../../utils/api';

const Comments = ({ id }) => {
  const [comments, setComments] = useState(null);
  const [newText,setNewText] = useState('');
  const [message,setMessage] = useState('');

  useEffect(() => {

    getCommentsByPost(id).then((updated) => {
      setComments(updated);
    });

  }, [id]);


  const handleTextChange = (e) =>{
    // input validation
    if(newText ===''){
      setMessage(null)
    }else if(newText!==''&& newText.trim().length<=10){
      setMessage('Text must be at least 10 characters')
    }else{
      setMessage(null);
    }
    setNewText(e.target.value);
  }

  const handSubmitComment =(e)=>{
    e.preventDefault();
    console.log("SUBMIT");
    setNewText(prev=> "");
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

        <FormControl
        sx={{ width: "100%" }}>
          <OutlinedInput 
          type="text"
          rows={2}
          onChange={handleTextChange}
          multiline placeholder="Write your comment"
          />
          <Typography mt={1} className="message" variant="subtitle2">{message}</Typography>
          <Button
          type="submit"
            className="submit"
            variant="contained"
            color="inherit"
            size="small"
            onClick={handSubmitComment}
          >
            Submit
          </Button>

          {/* COMMENT LIST */}
        </FormControl>
        <CommentCard id={id} comments={comments}/>
      </StyledDiv>
    );
};

export default Comments;
