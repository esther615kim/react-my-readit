
import { StyledBox } from '../components/Auth/auth.styled';
import { useContext, useEffect,useState } from 'react';
import AuthContext from '../contexts/authContext';
import { Avatar } from '@mui/material';
import { LinearProgress } from '@mui/material';
import { Divider } from '@mui/material';

const  LoginPage = () => {
    const [users, setUsers] = useState();
    const {usersInfo,AllUsersInfo, loggedin,loading} = useContext(AuthContext);

    useEffect(()=>{
      AllUsersInfo().then(
          (res)=>{
              setUsers(res);
          }
      )
    },[loading])

    console.log(users);

    if (loading) return <LinearProgress color="inherit" />;

  if (!loading)
    return (
      <StyledBox>
                <h4>Welcome back</h4>
                <h3>{users[0].username}</h3>
                <Avatar className="avatar" 
                src={users[0].avatar_url}/> 
                       <Divider />
      </StyledBox>
    )
};

  export default LoginPage;