const updateUserStart = () => ({
    type: "UPDATE_USER_START"
})

const updateUserSuccess = (user) => ({
    type: "UPDATE_USER_SUCCESS",
    payload: user
})

const resetPasswordStart = () => ({
    type: "UPDATE_PASSWORD_START"
})

const resetPasswordSuccess = (user) => ({
    type: "UPDATE_PASSWORD_SUCCESS",
    payload: user
})

export { updateUserStart, updateUserSuccess, resetPasswordStart, resetPasswordSuccess }