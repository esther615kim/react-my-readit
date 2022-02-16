import {createContext, useReducer,useState} from 'react';
import { getAllUsers} from './../utils/api';
import authReducer from './authReducers';

//logic 
// input 받아서
// check existing user
// 있으면 => successfully login 없으면 not valid user!

//
const AuthContext = createContext();

export const AuthProvider =({children})=>{


    const initialState={
        allUsers:null,
        username:null,
        loggedin:false,
        loading:true,
    }

    const [state,dispatch] = useReducer(authReducer,initialState)

    // const [allusersInfo, setallUsersInfo] = useState();
    // const [username,setUsername]= useState(); //
    // const [loggedin, setLoggedin] =useState(false); //
    // const [loading,setLoading] = useState(true);



    const getUsersInfo = async()=>{
        const updatedInfo = await getAllUsers();

        dispatch({
            type:"GET_USERS",
            payload:updatedInfo,
            loading:false,
        })}

        const setUserLogin = (username)=>{
            console.log("login",username);
    
            dispatch({
                type:"SET_LOGIN",
                payload:username,
                loggedin:true,
            })}


    return(
        <AuthContext.Provider
        value={{
            allUsers:state.allUsers,
            loading:state.loading,
            loggedin:state.loggedin,
            getUsersInfo,
            setUserLogin
        }}>
            {children}
            </AuthContext.Provider>
    )
}

export default AuthContext;
