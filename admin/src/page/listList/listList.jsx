import './listList.scss'
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add'
import { Link } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { ListContext } from '../../context/listContext/ListContext'
import { getLists, deleteList } from '../../context/listContext/callApi'

const ListList = () => {
    const { lists, dispatch } = useContext(ListContext)

    useEffect(() => {
      getLists(dispatch)
    }, [dispatch])
  
    const handleDelete = (id) => {
      deleteList(id, dispatch)
    }
  
    const listColumns = [
      { field: "_id", headerName: "ID", width: 250 },
      { field: "title", headerName: "Title", width: 250 },
      { field: "genre", headerName: "Genre", width: 150 },
      { field: "type", headerName: "Type", width: 150 },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/list/${params.row._id}`} state={{list: params.row}}>
                <VisibilityIcon className='admin_edit_button'/>
              </Link>
              <DeleteOutlineIcon 
                className="admin_delete_button"
                onClick={() => handleDelete(params.row._id)}
              />
            </>
          )
        }
      }
    ]
  
    return (
        <div className='listListMenu'>
            <div className='listList'>
                <DataGrid
                     rows={lists}
                     disableSelectionOnClick
                     columns={listColumns}
                     pageSize={8}
                     checkboxSelection
                     getRowId={(r) => r._id}
                />
            </div>
            <Link to="/admin/newLists" className='link'>
              <div className='listList_add'>
              <AddIcon />
              <p>Add lists</p>
            </div>
    </Link>
        </div>
        
    )
}

export default ListList