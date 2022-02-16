import { StyledBox } from "../components/Auth/auth.styled";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/authContext";
import {
  Avatar, ButtonGroup,Button

} from "@mui/material";
import { LinearProgress } from "@mui/material";
import {useNavigate  } from 'react-router-dom';
import { getPostsbyUser } from "../utils/api";

const ProfilePage = () => {
const [articles,setArticles] = useState();
const [loading,setloading] = useState(true);
 const {loggedin,username} = useContext(AuthContext);

 useEffect(()=>{
  getPostsbyUser(username)
  .then((updatedArticles)=>
  setArticles(updatedArticles))
  setloading(prev=>false);
 
 },[username, loading])

 articles&& console.log("셋",loading,articles);


  if (loading) return <LinearProgress color="inherit" />;

  if (!loading && articles)
    return (
      <StyledBox>
        <Avatar sx={{width:100,height:100}}/>
        <h3>{username}</h3>
        <ButtonGroup color="secondary"variant="outlined">
  <Button>Articles</Button>
  <Button>Comments</Button>
</ButtonGroup>
<div style={{width:"100%", border:"1px solid pink",minHeight:"60vh"}}>

</div>
      </StyledBox>
    );
};

export default ProfilePage;
