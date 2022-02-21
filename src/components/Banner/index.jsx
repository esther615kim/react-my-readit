import React,{ useContext, useEffect} from "react";
import { Avatar,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledDiv } from './banner.styled';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import AuthContext from "../../contexts/authContext";

const Banner = () => {

  const { allUsers, loading, getAllUsersInfo } =
  useContext(AuthContext);

  useEffect(() => {
    getAllUsersInfo();
  }, [loading]);

  const responsive = {
    0: {
        items: 3,
    },
    765: {
        items: 6
    }
  }

  const items = allUsers?.map((user)=>{
    return(
    <Link to={`/user/${user.username}`} state={{ from: user.username }} >
      <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
     <Avatar src={user.avatar_url}/>
       <Typography variant="caption">{user.username}</Typography>
     </div>
   </Link> 
    )
  })

  if (loading) return <div>loading...</div>;
  if (!loading && allUsers)
   return ( 
    <StyledDiv >
      <AliceCarousel
      mouseTracking 
      infinite
      autoPlayInterval={1500}
      animationDuration={2500}
      responsive = {responsive}
      autoPlay
      items={ items
      } 
      disableDotsControls/>
    </StyledDiv>
  )
}

export default Banner;