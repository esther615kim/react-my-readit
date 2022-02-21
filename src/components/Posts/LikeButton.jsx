import React,{useState,useContext} from 'react'
import {StyledLikedButton} from './posts.styled'
import ArticleContext from '../../contexts/articleContext';
import CommentContext from '../../contexts/commentContext';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LikeButton = (item) => {
  const {updateVotes} = useContext(ArticleContext);
  const {updateCommentVotes} =  useContext(CommentContext);
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
      
      (!isLiked)? updateCommentVotes(item.item.article_id, item.item.comment_id,1)
      : updateCommentVotes(item.item.article_id,item.item.comment_id,-1)

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