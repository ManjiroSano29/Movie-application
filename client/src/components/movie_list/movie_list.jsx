import './movie_list.scss'
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

const MovieList = ({item, index}) => {
    const [isHovered, setIsHovered] = useState(false)
    const [movie, setMovie] = useState({});
   
    useEffect(() => {
        const getMovie = async() => {
            try {
              const res = await axios.get("http://localhost:5000/movie/" + item, {
                headers: {
                  token:
                  "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                }
              })
              setMovie(res.data)
            } catch (err) {
              console.log(err)
            }
          }
    getMovie()
}, [item])
    
    return (
        <>
            <div 
                className='movies'
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={movie.image_sm} alt=""/>
                {isHovered && (
                    <>
                        <video src={movie.trailer} autoPlay={true} loop />
                        <div className='movie_desc'>
                            <Link to="/watchMovie" state={{movie}}>
                                <PlayCircleFilledOutlinedIcon className='movie_icon'/>
                            </Link>
                            <AddCircleIcon className='movie_icon'/>
                            <ThumbUpOutlinedIcon className='movie_icon'/>
                            <ThumbDownOutlinedIcon className='movie_icon'/>
                            <ExpandCircleDownIcon className='movie_more_icon'/>
                        </div>
                        <div className='movie_desc'>
                            <span className='movie_info' style={{border: "1px solid white"}}>{movie.limit}</span>
                            <span className='movie_info'>{movie.year}</span>
                            <span className='movie_info'>{movie.duration}</span>
                        </div>
                        <div className='movie_desc'>
                            <span className='movie_info'>{movie.desc1}</span>
                            <span className='movie_info'>{movie.desc2}</span>
                            <span className='movie_info'>{movie.desc3}</span>
                        </div>
                    </>
                )}
            </div>                 
        </>
    )
}

export default MovieList