import {createContext, useReducer} from 'react';
import { getAllUsers} from './../utils/api';
import authReducer from './authReducers';

const AuthContext = createContext();

export const AuthProvider =({children})=>{


    const initialState={
        allUsers:null,
        username:null,
        loggedin:false,
        loading:true,
    }

    const [state,dispatch] = useReducer(authReducer,initialState)


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
            username:state.username,
            getUsersInfo,
            setUserLogin
        }}>
            {children}
            </AuthContext.Provider>
    )
}

export default AuthContext;
