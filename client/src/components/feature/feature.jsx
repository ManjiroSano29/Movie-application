import './feature.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';

const Feature = ({type}) => {
    const [movie, setMovie] = useState({})
    useEffect(() => {
        const getMovie = async() => {
            const res = await axios.get(`http://localhost:5000/movie/random?type=${type}`,
            {
                headers: {
                    token:
                    "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
                },
            })
            setMovie(res.data[0])
        }
        getMovie()
    }, [type])

    return(
        <div>
            {type && (
                <form className='feature_act'>
                    <p style={{color: "white"}}>{type === "movies" ? "Movies" : "TV series"}</p>
                    <select className='feature_genre' name="genre" id="genre">
                        <option>Genre</option>
                        <option value="action">Action</option>
                        <option value="horror">Horror</option>
                        <option value="funny">Funny</option>
                        <option value="kids">Kids</option>
                        <option value="science_fiction">Science Fiction</option>
                        <option value="criminal">Criminal</option>
                        <option value="anime">Anime</option>
                    </select>
                </form>
            )}
            <div>
                <img
                    src={movie.image}
                    alt=""
                    className='poster'
                />
            </div>
            <div className='feature'>
                <div>
                    <img 
                        src={movie.image_title}
                        alt=""
                        className='title'
                    />
                </div>
                <div className='desc'>
                    {movie.main_desc}
                </div>
                <div className='action'>
                    <Link to="/watchMovie" state={{movie}} className='play_button'>
                        <PlayArrowIcon />
                        <p>Play</p>
                    </Link>
                    <button className='info_button'>
                        <InfoOutlinedIcon />
                        <p>Info</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Feature