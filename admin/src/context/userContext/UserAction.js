const getUserStart = () => ({
    type: "GET_USER_START"
})

const getUserSuccess = (users) => ({
    type: "GET_USER_SUCCCESS",
    payload: users
})

const deleteUserStart = () => ({
    type: "DELETE_USER_START"
})

const deleteUserSuccess = (id) => ({
    type: "DELETE_USER_SUCCESS",
    payload: id
})

export { getUserStart, getUserSuccess, deleteUserStart, deleteUserSuccess }