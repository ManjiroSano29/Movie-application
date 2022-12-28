const UserReducer = (state, action) => {
    switch(action.type){
        case "UPDATE_USER_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        
        case "UPDATE_USER_SUCCESS":
            return {
                users: state.users.map(
                    (user) => user._id === action.payload._id && action.payload),
                isFetching: false,
                error: false
            }
        
        default:
            throw new Error("Invalid action")    
    }
}

export default UserReducer