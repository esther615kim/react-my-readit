import React from 'react'
import {
Divider, OutlinedInput, FormControl,Button,Grid, Avatar,Box, Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { StyledDiv } from './comments.styled';

const Comments = () => {
  return (
    <StyledDiv>
        <Divider/>
        <h4>8 Comments</h4>

        {/* INPUT  */}
      <FormControl sx={{ width:"100%"}}>
        <OutlinedInput rows={3} multiline placeholder="Write your comment" />
        <Button className="submit" variant="contained" color="inherit" size="small">
            Submit
        </Button>
      </FormControl>

      {/* COMMENT LIST */}
      <Box>
          <div className="user-box">
          <Avatar sx={{width:26,height:26,marginRight:1}}/>
          <div>
          <h5>subtitle2</h5>
          <h6>timestamp</h6>
              </div>    
          </div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut iste magnam earum quos ab ullam, voluptatum, voluptatibus nostrum nobis adipisci laboriosam enim sint fugit ex praesentium. Omnis eius odit et.</p>
         
          <Divider/>
      </Box>


  </StyledDiv>
  )
}

export default Comments