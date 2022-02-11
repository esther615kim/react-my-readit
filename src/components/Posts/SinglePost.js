import {
  Paper,
  Stack,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React from "react";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { StyledDiv } from "./posts.styled";
import { useParams,useLocation } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const SinglePost = ({item}) => {
  const { id } = useParams();
  const location = useLocation();
  const {from} = location.state;
  console.log("데려온것",from);
  return (
    <StyledDiv>
      <Paper sx={{minHeight:"80vh"}}>
      
        <h3>Article {id} </h3>
        <h5>writer</h5>
        <p>
          This is part two of a series on how to get up and running with Systemd
          and Node.js. This part dives deeper into how to successfully run your
          app with systemd long-term, and how to set it up in a production
          environment.
        </p>

        {/* COMMENTS */}
        <div>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h4>9 comments</h4>
            </AccordionSummary>

            <AccordionDetails>
              
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>
    </StyledDiv>
  );
};

export default SinglePost;
