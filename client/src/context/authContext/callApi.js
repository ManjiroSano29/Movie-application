import { loginStart, loginSuccess, loginFailure } from "./AuthAction"
import axios from "axios"

const login = async(user, dispatch) => {
    dispatch(loginStart())
    try{
        const res = await axios.post("http://localhost:5000", user)
        dispatch(loginSuccess(res.data))
    }catch(e){
        dispatch(loginFailure(e.response.data.msg))
    }
}

export { login }