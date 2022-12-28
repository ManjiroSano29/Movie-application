import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsIcon from '@mui/icons-material/Settings';
import { useState, useContext } from "react"
import {useNavigate, Link} from 'react-router-dom'
import { AuthContext } from "../../context/authContext/AuthContext"

const NavBar = () => {
    const navigate = useNavigate()
    const [scroll, setScroll] = useState(false)
    const handleChangeNavBarColor = () => {
        if(window.scrollY > 0){
            return setScroll(true)
        }else{
            return setScroll(false)
        }
    }
    window.addEventListener("scroll", handleChangeNavBarColor)

    const { user } = useContext(AuthContext)
    
    return (
        <div>
            <div className={scroll ? "navbar scroll": "navbar"}>
                <div className="left-navbar">
                    <div>
                        <img
                            className="logo" 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <Link to="/home" className="link">
                            <span className="bar">Home</span>
                        </Link>
                        <Link to="/series" className="link">
                            <span className="bar">TV series</span>
                        </Link>
                        <Link to="/movies" className="link">
                            <span className="bar">Movies</span>
                        </Link>
                        <span className="bar">New and popular</span>
                        <span className="bar">My List</span>
                    </div>
                </div>
                <div className="right-navbar">
                    <SearchIcon className="icon"/>
                    <p style={{width:"40px", marginRight:"25px"}}>{user.name}</p>
                    <p><NotificationsNoneIcon className="icon" /></p>
                    <p onClick={() => navigate("/setting")}><SettingsIcon style={{cursor:"pointer"}} /></p>
                </div>
            </div>
        </div>
    )
}

export default NavBar