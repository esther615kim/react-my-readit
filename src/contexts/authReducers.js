const authReducer = (state,action) =>{
    switch(action.type){
        case 'GET_USERS':
            return{
               ...state,
               allUsers:action.payload,
               loading:false,
            }
        

        case "SET_LOGIN":
            return{
                ...state,
                username:action.payload.username, 
                userInfo:action.payload,
                loggedin:true,
            }
        default:
            return state; // no action but just return current state
    }
}

export default authReducer;