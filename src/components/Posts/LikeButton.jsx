import { Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import {StyledLikedButton} from './posts.styled'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext } from 'react';
import ArticleContext from '../../contexts/articleContext';

const LikeButton = (item ) => {
  const {updateVotes} = useContext(ArticleContext);

  const [isLiked, setIsLiked] = useState(false);

  const handleClickLikeButton= (e)=>{
    e.preventDefault();
    (!isLiked)? updateVotes(item.item,1): updateVotes(item.item,-1);
    setIsLiked(prev=> !prev);
    
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