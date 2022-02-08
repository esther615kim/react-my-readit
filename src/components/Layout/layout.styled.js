import styled from "styled-components";
import { Box } from '@mui/material';

export const StyledBox = styled(Box)`
position:absolute;
padding:0.2rem;
margin:1rem;
div{
    position:fixed;
    width:90%;
    bottom:1rem;
    background:#eee;
    border-radius:1.6rem;
    z-index:9;
}
`