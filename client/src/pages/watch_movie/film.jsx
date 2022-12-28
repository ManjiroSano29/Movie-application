import './film.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link, useLocation } from 'react-router-dom'

const Film = () => {
    const location = useLocation()
    const movie = location.state.movie
    
    return(
        <div className='film'>
            <Link to="/home">
                <div className='film_option'>
                    <ArrowBackIcon />
                    <p style={{left: "10px"}}>Home</p>
                </div>
            </Link>
           
            <video 
                className='film_video'
                src={movie.video}
                controls
                autoPlay
                progress
            />
        </div>
    )
}

export default Film