import './movieInfo.scss'
import PublishIcon from '@mui/icons-material/Publish'
import { useLocation } from 'react-router-dom'

const MovieInfo = () => {
    const location = useLocation()
    const movie = location.state.movie
 
    return (
        <div className='admin_movie_info'>
            <div style={{display: "flex", width: "800px", justifyContent:"space-between", margin:"auto"}}>
                <div className='movie_table'>
                    <p className='info_movie_label'>Movie:</p>
                    <p className='info_movie_info'>{movie.title}</p>
                </div>
                <div className='movie_table'>
                    <p className='info_movie_label'>Year:</p>
                    <p className='info_movie_info'>{movie.year}</p>
                </div>
                <div className='movie_table'>
                    <p className='info_movie_label'>Genre:</p>
                    <p className='info_movie_info'>{movie.genre}</p>
                </div>
                <div className='movie_table'>
                    <p className='info_movie_label'>Limit:</p>
                    <p className='info_movie_info'>{movie.limit}</p>
                </div>
                <div className='movie_table'>
                    <p className='info_movie_label'>Duration:</p>
                    <p className='info_movie_info'>{movie.duration}</p>
                </div>
            </div>

            <div style={{display:"flex", marginTop:"30px"}}>
                <div>
                    <p style={{fontSize:"25px", marginLeft:"10px"}}>Image:</p>
                    <img 
                        src={movie.image}
                        alt=""
                        style={{width:"350px", height:"197px", padding:"0 6px"}}
                    />
                </div>

                <div>
                    <p style={{fontSize:"25px", marginLeft:"10px"}}>Trailer:</p>
                    <video
                        src={movie.trailer}
                        controls
                        style={{width:"350px", padding:"0 6px"}} 
                    />
                </div>

                <div>
                    <p style={{fontSize:"25px", marginLeft:"10px"}}>Movie:</p>
                    <video
                        src={movie.trailer}
                        controls
                        style={{width:"350px", padding:"0 6px"}} 
                    />
                </div>
            </div>
        </div>
    )
}

export default MovieInfo
