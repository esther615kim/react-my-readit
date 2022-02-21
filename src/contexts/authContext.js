import {createContext, useReducer} from 'react';
import { getAllUsers,getByUsername} from './../utils/api';
import authReducer from './authReducers';
import { useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider =({children})=>{

    const initialState={
        allUsers:null,
        username:null,
        userInfo:null,
        loggedin:false,
        loading:true,
    }
   // localStroage
    const [state,dispatch] = useReducer(authReducer,initialState
    //     ,()=>{
    //     const localData = localStorage.getItem('state');
    //     return localData ? JSON.parse(localData):{};
    // }
    );

    // useEffect(()=>{
    //     localStorage.setItem('state',JSON.stringify(state));
    // },[state])

    const getAllUsersInfo = async()=>{
        const updatedInfo = await getAllUsers();

        dispatch({
            type:"GET_USERS",
            payload:updatedInfo,
            loading:false,
        })}

        const setUserLogin = async(username)=>{
            const updatedInfo = await getByUsername(username);
    
            dispatch({
                type:"SET_LOGIN",
                payload:updatedInfo,
                loggedin:true,
            })}

            const setUserLogout = ()=>{
        
                dispatch({
                    type:"SET_LOGOUT",
                    username:null,
                    loggedin:false,
                })}

       
    return(
        <AuthContext.Provider
        value={{
            allUsers:state.allUsers,
            loading:state.loading,
            loggedin:state.loggedin,
            userInfo:state.userInfo,
            username:state.username,
            getAllUsersInfo,
            setUserLogin,
            setUserLogout
        }}>
            {children}
            </AuthContext.Provider>
    )
}

export default AuthContext;
