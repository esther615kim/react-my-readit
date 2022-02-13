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

    const [userInfo, setUserInfo] = useState([]);
    const [loggedin, setLoggedin] =useState(false);
    const [loading,setLoading] = useState(true);


    const checkUserInfo = async() =>{
      const updatedInfo = await getAllUsers();
      setUserInfo(updatedInfo);
      setLoading(pre=>false);
    } 

    const getAllUsers = async()=>{
        console.log("all all!")
    }


    return(
        <AuthContext.Provider
        value={{userInfo,loggedin,loading,getAllUsers}}>
            {children}
            </AuthContext.Provider>
    )
}

export default AuthContext;
