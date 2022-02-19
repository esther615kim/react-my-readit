import React, { useState, useEffect, useContext, useCallback } from "react";
import {
  Divider,
  OutlinedInput,
  FormControl,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";
import { StyledDiv } from "./comments.styled";
import { deleteComment, getCommentsByPost } from "../../../utils/api";
import CommentCard from "./CommentCard.";
import CommentForm from "./CommentForm";
import { postComment } from "./../../../utils/api";
import AuthContext from "../../../contexts/authContext";
import CommentContext from "../../../contexts/commentContext";

const Comments = ({ id }) => {
  const { articleComments, updateCommentsByArticle,updateCommentVotes, loading } =
    useContext(CommentContext);
  const { username } = useContext(AuthContext);

  useEffect(() => {
    updateCommentsByArticle(id);
    console.log(articleComments);
  }, [id, loading]);

  const addNewComment = async (newComment) => {
    const res = await postComment(id, username, newComment);
    const Nextres = await updateCommentsByArticle(id);
    return Nextres;
  };

  const deleteAComment = (comment_id) => {
    deleteComment(comment_id).then(() => {
      getCommentsByPost(id).then((updated) => {
        updateCommentsByArticle(id);
      });
    });
  };

  console.log(articleComments);

  if (loading)
    return (
      <StyledDiv>
        <Divider />
        <LinearProgress color="inherit" />
      </StyledDiv>
    );

  if (!loading)
    return (
      <StyledDiv>
        <Divider />
        <h4>{articleComments.length} comments</h4>
        <CommentForm addNewComment={addNewComment} />
        <CommentCard
        updateCommentVotes={updateCommentVotes}
          comments={articleComments}
          deleteAComment={deleteAComment}
        />
      </StyledDiv>
    );
};

export default Comments;
