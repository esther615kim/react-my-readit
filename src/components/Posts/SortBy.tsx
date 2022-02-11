import { StyledWrapper } from './posts.styled';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { useState } from 'react';


export default function SortBy() {
  const [sorting, setSorting] = useState<string>("");

  return (
    <StyledWrapper>
        <Select sx={{fontSize:12,height:30, width:60, borderRadius:30,background:"#efef"}} 
        value={sorting} 
        onChange={
            // (event:React.ChangeEvent<HTMLInputElement>):void => {
                (event:any):void => {
                setSorting(event.target.value);
              }
            
        }>
          <MenuItem value={10}>topic</MenuItem>
          <MenuItem value={20}>desc</MenuItem>
          <MenuItem value={30}>asc</MenuItem>
        </Select>
    </StyledWrapper>
  )
}