const getListStart = () => ({
    type: "LIST_START",
})

const getListSuccess = (lists) => ({
    type: "LIST_SUCCESS",
    payload: lists,
})

const deleteListStart = () => ({
    type: "DELETE_LIST_START"
})

const deleteListSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id
})

const createListStart = () => ({
    type: "CREATE_LIST_START",
})

const createListSuccess = (list) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: list,
})

export { getListStart, getListSuccess, deleteListStart, deleteListSuccess, createListStart, createListSuccess }