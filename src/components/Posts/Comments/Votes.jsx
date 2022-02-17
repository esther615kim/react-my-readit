import React, { useState, useEffect,useCallback } from "react";

import { StyledStack } from "./comments.styled";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { patchVotestoComment } from "../../../utils/api";

const Votes = ({ item }) => {

  // useEffect(() => {
  //   item && setLikes(item.votes);
  // }, [likes]);

  const [likes, setLikes] = useState(0);

  const handleIncVote = useCallback((e) => {
    e.preventDefault()
    const inc_vote = 1;
    setLikes((prev) => prev + 1);
    patchVotestoComment(item.comment_id, inc_vote).catch((err) => {
      console.error(err);
      setLikes((prev) => prev - 1);
    });
  },[likes]);

  const handleDecVote = () => {
    const dec_vote = -1;
    setLikes((prev) => prev - 1);
    patchVotestoComment(item.comment_id, dec_vote).catch((err) => {
      console.error(err);
      setLikes((prev) => prev + 1);
    });
  };


  return (
    <StyledStack direction="row" justifyContent="center" alignItems="center">
      <ArrowUpward className="arrow" color="warning" onClick={handleIncVote} />
      <span>{likes}</span>
      <ArrowDownward
        onClick={()=>{handleDecVote()}}
        className="arrow"
        color="primary"
      />
    </StyledStack>
  );
};

export default Votes;
