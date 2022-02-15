import React, { useState } from "react";
import {createContext} from 'react';
import { getAllUsers} from './../utils/api';

//logic 
// input 받아서
// check existing user
// 있으면 => successfully login 없으면 not valid user!

//
const AuthContext = createContext();

export const AuthProvider =({children})=>{

    const [usersInfo, setUsersInfo] = useState();
    const [loggedin, setLoggedin] =useState(true);
    const [loading,setLoading] = useState(true);



    const getUsersInfo = async()=>{
        const updatedInfo = await getAllUsers();
        setUsersInfo(updatedInfo);
        setLoading(false);
        if(usersInfo) return usersInfo;
        // return updatedInfo;
    }


    return(
        <AuthContext.Provider
        value={{usersInfo,loggedin,setLoggedin,loading,getUsersInfo}}>
            {children}
            </AuthContext.Provider>
    )
}

export default AuthContext;
