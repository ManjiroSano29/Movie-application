const loginStart = () => ({
    type: "LOGIN_START",
})

const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
})

const loginFailure = () => ({
    type: "LOGIN_FAILURE",
})

const logOut = () => ({
    type: "LOG_OUT"
})

export {loginStart, loginSuccess, loginFailure, logOut}