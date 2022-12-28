import axios from 'axios'
import { getListStart, getListSuccess, deleteListStart, deleteListSuccess, createListStart, createListSuccess } from './ListAction' 

const getLists = async(dispatch) => {
    dispatch(getListStart())
    const res = await axios.get("http://localhost:5000/list", {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
        }
    })
    dispatch(getListSuccess(res.data))
}

const deleteList = async(id, dispatch) => {
    dispatch(deleteListStart())
    await axios.delete("http://localhost:5000/list/" + id, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
        }
    })
    dispatch(deleteListSuccess(id))
}

const createList = async(list, dispatch) => {
    dispatch(createListStart())
    const res = await axios.post("http://localhost:5000/list", list, {
        headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
        }
    })
    dispatch(createListSuccess(res.data))
}

export { getLists, deleteList, createList }