import React, { useState } from "react";
import { createContext } from "react";
import {
  getAllComments,
  patchVotestoComment,
  getCommentsByPost,
  getCommentsByVotes,
} from "./../utils/api";

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [articleComments, setArticleComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const setFetchedComments = async () => {
    // get all comments
    const updatedComments = await getAllComments();
    setComments(updatedComments);
    setLoading((pre) => false);
  };

  // get cooments by article id
  const updateCommentsByArticle = async (id) => {
    getCommentsByPost(id).then((updated) => {
      setArticleComments(updated);
      setLoading((pre) => false);
    });
  };

  const fetchCommentsByVotes = async (id) => {
    getCommentsByVotes(id).then((updated) => {
      setArticleComments(updated);
      setLoading((pre) => false);
    });
  };

  const updateCommentVotes = async (article_id, id, vote) => {
    const res = await patchVotestoComment(id, vote);
    const updatedComments = await updateCommentsByArticle(article_id);
    return updatedComments;
  };

  return (
    <CommentContext.Provider
      value={{
        comments,
        loading,
        setFetchedComments,
        articleComments,
        getCommentsByVotes,
        updateCommentsByArticle,
        updateCommentVotes,
        fetchCommentsByVotes,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContext;
