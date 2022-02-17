import React, { useState } from "react";
import {
  OutlinedInput,
  FormControl,
  Typography,
  Button,
} from "@mui/material";

const CommentForm = ({addNewComment}) => {

  const [newText,setNewText] = useState('');
  const [message,setMessage] = useState('');

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

  const handleSubmit = (e) =>{
      e.preventDefault();
      const newComment = newText;
      addNewComment(newComment);
      setNewText('');
  }

    return (
        <>
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
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </FormControl>
        </>
    );
};

export default CommentForm;
