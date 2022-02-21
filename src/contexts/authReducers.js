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

            case "SET_LOGOUT":
                return{
                    ...state,
                    username:null,
                    loggedin:false,
                }
        default:
            return state;
    }
}

export default authReducer;