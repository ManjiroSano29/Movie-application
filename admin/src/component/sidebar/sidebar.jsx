import './sidebar.scss'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ListOutlinedIcon from '@mui/icons-material/ListOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext/AuthContext'
import { logOut } from '../../context/authContext/AuthAction'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
    const navigate = useNavigate()
    const { dispatch } = useContext(AuthContext)
    const handleLogOut = () => {
        dispatch(logOut())
        navigate("/")
    }

    return (
        <div className='admin_sidebar'>
            <div className='admin_menu'>
                <p>Quick menu</p>
                <Link to="/admin" className='link'>
                    <div className='admin_feature'>
                        <LineStyleIcon className='admin_icon'/>
                        <p className='admin_name'>Home</p>
                    </div>
                </Link>
                <Link to="/admin/users" className='link'>
                    <div className='admin_feature'>
                        <PersonOutlineIcon className='admin_icon'/>
                        <p className='admin_name'>Users</p>
                    </div>
                </Link>
                <Link to="/admin/movies" className='link'>
                    <div className='admin_feature'>
                        <PlayCircleOutlineIcon className='admin_icon'/>
                        <p className='admin_name'>Movies</p>
                    </div>
                </Link>
                <Link to="/admin/list" className='link'>
                    <div className='admin_feature'>
                        <ListOutlinedIcon className='admin_icon'/>
                        <p className='admin_name'>List</p>
                    </div>
                </Link>
                <div className='admin_feature' onClick={handleLogOut}>
                    <LogoutIcon className='admin_icon'/>
                    <p className='admin_name'>Log out</p>
                </div>
            </div>
            <div className='admin_menu'>
                <p>Notifications</p>
                <div className='admin_feature'>
                    <MailOutlineIcon className='admin_icon'/>
                    <p className='admin_name'>Mail</p>
                </div>
                <div className='admin_feature'>
                    <InsertCommentIcon className='admin_icon'/>
                    <p className='admin_name'>Feedback</p>
                </div>
                <div className='admin_feature'>
                    <ChatBubbleOutlineIcon className='admin_icon'/>
                    <p className='admin_name'>Messages</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar