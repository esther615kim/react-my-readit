import {
  Paper,
  Stack,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import React from "react";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {StyledBox } from "./posts.styled";
import { useParams,useLocation } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Chip } from '@mui/material/';
import { lime } from '@mui/material/colors';

const SinglePost = ({item}) => {
  const { id } = useParams();
  const location = useLocation();
  const {from} = location.state;
  console.log("I brought this",from);
  return (
    <StyledBox>
         <div class="author-box">
      <Avatar className="svg"
      // src="/static/images/avatar/1.jpg" 
      sx={{ bgcolor: lime[200], width:50,height:50 }}>
              
      </Avatar>
      <h5>{from.author}</h5>
      </div>
      <Paper sx={{minHeight:"80vh",p:3}}>
      <Container>
      <h3>{from.title}</h3>
      <Stack   direction="row"
  justifyContent="space-around"
  alignItems="center"
      >
      <Chip label={from.topic} variant="outlined" size="small" />
        <Typography variant="button">{from.created_at}</Typography>
      </Stack>

        <p>{from.body}</p>

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
        </Container>
      </Paper>
    </StyledBox>
  );
};

export default SinglePost;
