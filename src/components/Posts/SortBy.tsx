import { StyledWrapper } from './posts.styled';
import { IconButton,InputLabel,FormControl,NativeSelect } from '@mui/material';
import { MenuItem } from '@mui/material';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function SortBy() {
  const [sorting, setSorting] = useState<string>("");

  return (
    <StyledWrapper>
<FormControl margin="dense" size="small" variant="outlined" sx={{width:60}}>
  <NativeSelect sx={{fontSize:'0.6rem'}}
    defaultValue={"desc"}
    inputProps={{
      name: 'sort_by'
    }}
  >
    <option value={"created_at"}>date</option>
    <option value={"votes"}>popular</option>
    <option value={"title"}>title</option>
  </NativeSelect>
</FormControl>
<FormControl margin="dense" size="small" variant="outlined" sx={{width:60}}>
  <NativeSelect  sx={{fontSize:'0.6rem'}}
    defaultValue={"desc"}
    inputProps={{
      name: 'order'
    }}
  >
    <option value={"desc"}>desc</option>
    <option value={"asc"}>asc</option>
  </NativeSelect>
</FormControl>
    </StyledWrapper>
  )
}