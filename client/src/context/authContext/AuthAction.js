const loginStart = () => ({
    type: 'LOGIN_START'
})

const loginSuccess = user => ({
    type: 'LOGIN_SUCCESS',
    payload: user
})

const loginFailure = (e) => ({
    type: 'LOGIN_FAILURE',
    payload: e
})

const logout = () => ({
    type: 'LOGOUT'
})

export { loginStart, loginSuccess, loginFailure, logout }