import axios from "axios"
import {loginStart, loginSuccess, loginFailure} from "./AuthAction"

export const loginApi = async(user, dispatch) => {
    dispatch(loginStart())
    try {
      const res = await axios.post("http://localhost:5000", user)
      res.data.isAdmin && dispatch(loginSuccess(res.data))
    } catch (err) {
      dispatch(loginFailure())
    }
 }