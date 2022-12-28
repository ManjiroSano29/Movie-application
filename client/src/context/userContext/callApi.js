import axios from "axios"
import { updateUserStart, updateUserSuccess } from "./UserAction"

const letUpdateUser = async(user, dispatch) => {
    dispatch(updateUserStart())
    const res = await axios.put("http://localhost:5000/user/" + user._id, user, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
        }
    })
    dispatch(updateUserSuccess(res.data))
}

export { letUpdateUser }