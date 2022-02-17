import { useContext, useEffect, useState } from "react";
import { StyledDiv } from './banner.styled';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import AuthContext from "../../contexts/authContext";
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import SinglePost from './../Posts/SinglePost';
import { Typography } from '@mui/material';

const Banner = () => {

  const { allUsers, loading, getUsersInfo } =
  useContext(AuthContext);

  useEffect(() => {
    getUsersInfo();
    console.log("now using reducer",allUsers);
  }, [loading]);

  const responsive =     {
    0: {
        items: 3,
    },
    765: {
        items: 6
    }
  }

  const items = allUsers?.map((user)=>{
    return(
    <Link to={'/user'} state={{ from: user.username }} >
      <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
     <Avatar sx={{my:1,width:40,height:40,mx:30}}src={user.avatar_url}/>
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