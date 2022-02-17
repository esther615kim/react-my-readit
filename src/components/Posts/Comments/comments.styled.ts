import styled from "styled-components";
import { Box,Stack } from '@mui/material';

export const StyledDiv = styled.div`
text-align:left;

.submit{
    margin:1rem 0;
}
h6{
    font-weight:400;
}
.message{
    text-align:center;
    color:#d9541c;
}
.user-box{
    padding-top:1rem;
    position:relative;
    display:flex;
    align-items:center;
    h5,h6{
        margin:0.2rem;
    }
    h6{
        color:#aaa;
    }
}
p{
min-height:2rem;
text-indent:0;
padding:0.4rem;
margin:0.4rem;
position:relative;
}
.delete {
    color:#212121;
    padding-top:0.2rem;
    margin-top:0.2rem;
    font-size:1rem;
    position:absolute;
    right:0.5rem;
    
}
`
export const StyledStack  = styled(Stack)`
position:absolute;
right:0.2rem;
.arrow{
    margin:0.5rem;
    font-size:0.8rem;
}
`
