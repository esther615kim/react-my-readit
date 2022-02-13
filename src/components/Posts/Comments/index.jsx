import React, {  useState, useEffect } from "react";
import {
  Divider,
  OutlinedInput,
  FormControl,
  Button,
  LinearProgress,
} from "@mui/material";
import { StyledDiv} from "./comments.styled";
import CommentCard from './CommentCard.';
import { getCommentsByPost } from '../../../utils/api';

const Comments = ({ id }) => {
  const [comments, setComments] = useState(null);

  useEffect(() => {

    getCommentsByPost(id).then((updated) => {
      setComments(updated);
    });

  }, [id]);


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

        <FormControl sx={{ width: "100%" }}>
          <OutlinedInput rows={3} multiline placeholder="Write your comment" />
          <Button
            className="submit"
            variant="contained"
            color="inherit"
            size="small"
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
