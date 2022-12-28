const UserReducer = (state, action) => {
    switch(action.type){
        case "GET_USER_START":
            return {
                users: [],
                isFetching: true,
                error: false
            }

        case "GET_USER_SUCCCESS":
            return {
                users: action.payload,
                isFetching: false,
                error: false
            }
        
        case "DELETE_USER_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        
        case "DELETE_USER_SUCCESS":
            return {
                users: state.users.filter((user) => user._id !== action.payload),
                isFetching: false,
                error: false
            }

        default:
            throw new Error("Invalid action")    
    }
}

export default UserReducer