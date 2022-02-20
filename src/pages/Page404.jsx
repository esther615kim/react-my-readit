import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const Page404 = () => {
  return (
    <div style={{position:"absolute",background:"#fff",right:0,left:0,bottom:0,top:0,height:"100vh",color:"#21212"}}>
      <ErrorOutlineIcon sx={{pt:10,color:"red"}}/>
        <h3 style={{color:"#212121"}}>
            404 Error: Page Not Found
        </h3>
    </div>
  )
}
export default Page404;