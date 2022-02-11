import styled from "styled-components";

export const StyledDiv = styled.div`

    height:100%;
    color: #212121;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background-color: #fff;
    border-top-right-radius:1.6rem;
    border-top-left-radius:1.6rem;

    .chip:hover{
        background:yellow;
    }
    a{
        text-decoration:none;
        color:#212121;
    }
    h4{
        padding: 0 1rem;
        text-align:left;
        font-size:rem;
        color:#3d3f40;
        margin-bottom:0;
    }
    span{
        display:block;
        text-align:right;
        font-size:0.6rem;
        margin:0;
        padding:0 1rem;
    }
    p{
        padding:0 1rem;
        overflow:hidden;
        font-size:0.8rem;
        line-height:1rem;
        height:3.8rem;
        text-overflow:ellipsis;
        -webkit-line-clamp: 3;
        
    }
    .css-11e3kdx-MuiGrid-root{
        margin:0 0.6rem;
    }
    .post-box{
        position:relative;
        max-width:30rem;
        margin-right:0;
        padding:0.5rem 0;
        height: ${({ height }:{height?:string|undefined}) => height || "10rem"};
        flex-wrap:wrap;
        margin-bottom:0.4rem;
    }
    button{
        font-size:0.7rem;
        padding:0;
    }
    .stack{
        background-color:#fff;
        position:absolute;
        bottom:0;
        left:0.2rem;
        right:0.2rem;
    }
    button:first-child{
        color:hotpink;
    }
`

export const StyledWrapper =styled.div`
margin-left:2rem;
`