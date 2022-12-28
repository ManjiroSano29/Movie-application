import './movieList.scss'
import { DataGrid } from '@mui/x-data-grid'
import AddIcon from '@mui/icons-material/Add'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { MovieContext } from '../../context/movieContext/MovieContext'
import { getMovies, deleteMovie } from '../../context/movieContext/callApi'

const MovieList = () => {
    const { movies, dispatch } = useContext(MovieContext)
    
    useEffect(() => {
        getMovies(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
        deleteMovie(id, dispatch)
    }

    const movieColumns = [
        {field: '_id', headerName: 'ID', width: 250 },
        {field: 'title', headerName: 'Movie', width: 180},
        {field: 'genre', headerName: 'Genre', width: 140},
        {field: 'year', headerName: 'Year', width: 140},
        {field: 'limit', headerName: 'Limit', width: 140},
        
        {
            field: 'active',
            headerName: 'Active',
            width: 140,
            renderCell: (params) => {
              return (
                <>
                  <Link to={`/movie/${params.row._id}`} state={{movie: params.row}}>
                    <VisibilityIcon className='admin_edit_button'/>
                  </Link>
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
                     rows={movies}
                     disableSelectionOnClick
                     columns={movieColumns}
                     pageSize={8}
                     checkboxSelection
                     getRowId={(r) => r._id}
                />
            </div>
            <Link to="/admin/newMovies" className='link'>
                <div className='movieList_add'>
                    <AddIcon />
                    <p>Add movies</p>
                </div>
            </Link>
        </div>
    )
}

export default MovieList