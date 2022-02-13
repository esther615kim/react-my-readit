
import React,{useState,useEffect}from "react";

import { StyledStack } from "./comments.styled";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { patchVotestoComment } from '../../../utils/api';


const Votes = ({item}) => {
    const [likes, setLikes] = useState(0);
    
    useEffect(()=>{
        setLikes(item.votes)
    },[likes])

      
    const handleIncVote = ()=>{
      const inc_vote = 1;
        setLikes(prev=> prev + inc_vote);
        patchVotestoComment(item.comment_id,inc_vote);
    }
    
    const handleDecVote = ()=>{
      const dec_vote = -1;
        setLikes(prev=> prev + dec_vote);
        patchVotestoComment(item.comment_id,dec_vote);
      
    }

  return (
    <StyledStack
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
    <ArrowUpward className="arrow" color="warning"
    onClick={handleIncVote} />
    <span>{likes}</span>
    <ArrowDownward
     onClick={handleDecVote}
      className="arrow"
      color="primary"
    />
  </StyledStack>
  )
}

export default Votes