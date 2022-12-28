import axios from "axios"
import { getUserStart, getUserSuccess, deleteUserStart, deleteUserSuccess } from "./UserAction"

const getUsers = async(dispatch) => {
    dispatch(getUserStart())
    const res = await axios.get("http://localhost:5000/user", {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
        }
    })
    dispatch(getUserSuccess(res.data))
}

const deleteUser = async(id, dispatch) => {
    dispatch(deleteUserStart())
    const res = await axios.delete("http://localhost:5000/user/" + id, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
        }
    })
    dispatch(deleteUserSuccess(id))
}

export { getUsers, deleteUser }