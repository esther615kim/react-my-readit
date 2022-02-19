import { Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import {StyledLikedButton} from './posts.styled'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext } from 'react';
import ArticleContext from '../../contexts/articleContext';
import CommentContext from '../../contexts/commentContext'

const LikeButton = (item ) => {
  const {updateVotes} = useContext(ArticleContext);
  const {updateCommentVotes} =useContext(CommentContext);

  const [isLiked, setIsLiked] = useState(false);

  const handleClickLikeButton= (e)=>{
    e.preventDefault();
    // case 1 article
    if(typeof(item.item)==="number"){
    (!isLiked)? updateVotes(item.item,1): updateVotes(item.item,-1);
    setIsLiked(prev=> !prev);
    }
    // case 2 comment
    if(typeof(item.item)==="object"){
      console.log("comment_id",item.item.comment_id);
      console.log(updateCommentVotes);
      (!isLiked)? updateCommentVotes(item.item.comment_id,1)
      : updateCommentVotes(item.item.comment_id,-1)

      setIsLiked(prev=> !prev);
    }

  }

  return (
    <div>
      {!isLiked?
            <FavoriteBorderIcon onClick={handleClickLikeButton}/>
            :
            <FavoriteIcon
            onClick={handleClickLikeButton} />
      }
    </div>
  )
}

export default LikeButton