import React, { useState, useEffect, useContext, useCallback } from "react";
import { Divider, Stack, LinearProgress, Chip } from "@mui/material";
import { StyledCommentDiv } from "./comments.styled";
import { deleteComment, getCommentsByPost } from "../../../utils/api";
import CommentCard from "./CommentCard.";
import CommentForm from "./CommentForm";
import { postComment } from "./../../../utils/api";
import AuthContext from "../../../contexts/authContext";
import CommentContext from "../../../contexts/commentContext";

const Comments = ({ id }) => {
  const {
    articleComments,
    updateCommentsByArticle,
    updateCommentVotes,
    fetchCommentsByVotes,
    loading,
  } = useContext(CommentContext);
  const { username } = useContext(AuthContext);

  useEffect(() => {
    updateCommentsByArticle(id);
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

  const handleCLickSorting = (e)=>{
    e.preventDefault();
    if(e.nativeEvent.target.textContent ==="popular"){ 
      fetchCommentsByVotes(id);
    }else{
      updateCommentsByArticle(id);
    }
  }

  if (loading)
    return (
      <StyledCommentDiv>
        <Divider />
        <LinearProgress color="inherit" />
      </StyledCommentDiv>
    );

  if (!loading)
    return (
      <StyledCommentDiv>
        <Divider />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <h4 className="comment-title">{articleComments.length} comments</h4>
          <div>
          <Chip id="date" sx={{mr:1, px:0.5}} label="latest"  clickable onClick={handleCLickSorting}/>
          <Chip label="popular" variant="outlined" clickable onClick={handleCLickSorting} />
          </div>
        </Stack>
        <CommentForm addNewComment={addNewComment} />
        <CommentCard
          updateCommentVotes={updateCommentVotes}
          comments={articleComments}
          deleteAComment={deleteAComment}
        />
      </StyledCommentDiv>
    );
};

export default Comments;
