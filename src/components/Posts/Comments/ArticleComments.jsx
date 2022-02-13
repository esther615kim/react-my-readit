import React,{useEffect,useState} from 'react';
import { getSinglePost } from './../../../utils/api';
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { StyledStack } from './comments.styled';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import StickyNote2Icon from "@mui/icons-material/StickyNote2";


const ArticleComments = ({item}) => {
    // const [singleArticle, setSingleArticle] = useState(null);
    
    // useEffect(()=>{
    //     console.log(article_id);
    //     getSinglePost(article_id)
    //     .then((res)=>{
    //         console.log(res);
    //         // setSingleArticle(res);
    //     })
    // },[article_id])

          return (
              <>
        {
item.map((item)=>{
    return(
        <div style={{display:"flex", flexDirection:"row", fontSize:"0.6rem"}}>              
 <StyledStack direction="row" alignItems="center">
 <ArrowUpward
   className="arrow"
   color="warning"
   size="small"
 />
 <span style={{fontSize:12}}>{item.votes}</span>
 <ArrowDownward
   className="arrow"
   color="primary"
   size="small"
 />
 </StyledStack>

 <Link
   to={`/posts/${item.article_id}`}
   state={{ from: item }}
 >
 <Button color="inherit"startIcon={<StickyNote2Icon/>}>{item.comment_count} comments</Button>
 </Link> 
 </div>
    )
})
    
          }
          </>
          )
          

};

export default ArticleComments;