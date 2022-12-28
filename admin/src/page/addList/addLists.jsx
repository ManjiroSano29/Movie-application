import './addLists.scss'
import { useState, useContext, useEffect } from 'react'
import { createList } from '../../context/listContext/callApi'
import { ListContext } from '../../context/listContext/ListContext'
import { MovieContext } from "../../context/movieContext/MovieContext"
import { getMovies } from '../../context/movieContext/callApi'

const AddLists = () => {
    const [list, setList] = useState(null)

    const { dispatch } = useContext(ListContext);
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatchMovie);
    }, [dispatchMovie])

    const handleChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value })
    }

    const handleSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, (option) => option.value)
        setList({ ...list, [e.target.name]: value })
      };
    
      const handleSubmit = (e) => {
        e.preventDefault()
        createList(list, dispatch)
      }

    return (
        <div className='add_lists'>
            <h1 style={{marginLeft:"30px"}}>New lists</h1>
            <form className='add_lists_forms'>
            <div className='form_left'>
                <div className='add_lists_form'>
                    <label className='label'>Title</label>
                    <input 
                        type="text"
                        placeholder='Title'
                        className='lists_text'
                        name='title'
                        onChange={handleChange}
                    />
                </div>
                <div className='add_lists_form'>
                    <label className='label'>Type</label>
                    <input 
                        type="text"
                        placeholder='Type'
                        className='lists_text'
                        name='type'
                        onChange={handleChange}
                    />
                </div>
                <div className='add_lists_form'>
                    <label className='label'>Genre</label>
                    <input 
                        type="text"
                        placeholder='Genre'
                        className='lists_text'
                        name='genre'
                        onChange={handleChange}
                    />
                </div>
            </div>
            
            <div className='add_lists_form'>
                <label className='label'>Choose movies</label>
                <select
                    multiple
                    name="film"
                    onChange={handleSelect}
                    style={{height:"243px", width:"300px", marginTop:"10px"}}
                >
                    {movies.map((movie) => (
                        <option key={movie._id} value={movie._id} style={{fontSize:"15px", padding:"5px"}}>
                            {movie.title}
                        </option>
                    ))}
                </select>
            </div>
            <button className='add_lists_button' onClick={handleSubmit}>Create</button>
            </form>
        </div>
    )
}

export default AddLists