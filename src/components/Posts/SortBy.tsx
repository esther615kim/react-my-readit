import { StyledWrapper } from './posts.styled';
import { IconButton, Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function SortBy() {
  const [sorting, setSorting] = useState<string>("");

  return (
    <StyledWrapper>
      <IconButton>
      <MoreVertIcon/>
      </IconButton>
        {/* <Select sx={{fontSize:12,height:30, width:60, borderRadius:30,background:"#efef"}} 
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
        </Select> */}
    </StyledWrapper>
  )
}