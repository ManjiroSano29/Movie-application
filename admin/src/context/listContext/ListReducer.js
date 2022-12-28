const ListReducer = (state, action) => {
    switch(action.type){
        case "LIST_START":
            return {
                lists: [],
                isFetching: true,
                error: false
            }

        case "LIST_SUCCESS":
            return {
                lists: action.payload,
                isFetching: false,
                error: false
            }

        case "DELETE_LIST_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }
              
        case "DELETE_LIST_SUCCESS":
            return {
                lists: state.lists.filter((list) => list._id !== action.payload),
                isFetching: false,
                error: false,
            }

        case "CREATE_LIST_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }
              
        case "CREATE_LIST_SUCCESS":
            return {
                lists: [...state.lists, action.payload],
                isFetching: false,
                error: false,
            } 
        
        default: 
            throw new Error("Invalid action")     
    }
}

export default ListReducer