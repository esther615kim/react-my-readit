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

    const [allusersInfo, setallUsersInfo] = useState();
    const [username,setUsername]= useState(); //
    const [loggedin, setLoggedin] =useState(false); //
    const [loading,setLoading] = useState(true);



    const getUsersInfo = async()=>{
        const updatedInfo = await getAllUsers();
        setallUsersInfo(updatedInfo);
        setLoading(false);
        if(allusersInfo) return allusersInfo;
        // return updatedInfo;
    }


    return(
        <AuthContext.Provider
        value={{allusersInfo,loggedin,setLoggedin,loading,getUsersInfo}}>
            {children}
            </AuthContext.Provider>
    )
}

export default AuthContext;
