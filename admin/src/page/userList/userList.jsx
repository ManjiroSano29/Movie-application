import './userList.scss'
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { Link } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { UserContext } from '../../context/userContext/UserContext'
import { getUsers, deleteUser } from '../../context/userContext/callApi'

const UserList = () => {
    const { users, dispatch } = useContext(UserContext)
    
    useEffect(() => {
        getUsers(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
        deleteUser(id, dispatch)
    }

    const userColumns = [
        {field: '_id', headerName: 'ID', width: 250 },
        {field: 'name', headerName: 'Name', width: 180},
        {field: 'email', headerName: 'Email', width: 140},
        {field: 'country', headerName: 'Country', width: 140},
        {field: 'phoneNumber', headerName: 'Phone number', width: 140},
        
        {
            field: 'active',
            headerName: 'Active',
            width: 140,
            renderCell: (params) => {
              return (
                <>
                  <DeleteOutlineIcon 
                    className='admin_delete_button' 
                    onClick={() => handleDelete(params.row._id)}
                  />
                </>
              )
            }
        }
    ]

    return (
        <div className='movieListMenu'>
            <div className='movieList'>
                <DataGrid
                     rows={users}
                     disableSelectionOnClick
                     columns={userColumns}
                     pageSize={8}
                     checkboxSelection
                     getRowId={(r) => r._id}
                />
            </div>
        </div>
    )
}

export default UserList