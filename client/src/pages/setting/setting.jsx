import './setting.scss'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { logout } from '../../context/authContext/AuthAction'
import { AuthContext } from '../../context/authContext/AuthContext'
import { UserContext } from '../../context/userContext/UserContext'
import { letUpdateUser } from '../../context/userContext/callApi'

const Setting = () => {
    const navigate = useNavigate()
    const {user, dispatch} = useContext(AuthContext)
    const {dispatch: userDispatch} = useContext(UserContext)
    const [updateUser, setUpdateUser] = useState(user)
    
    const handleLogOut = () => {
        dispatch(logout())
        navigate("/login")
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setUpdateUser({
            ...updateUser,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        letUpdateUser(updateUser, userDispatch)
        let data = JSON.parse(localStorage.getItem("user"))
        Object.keys(updateUser).forEach((key) => {
            data[key] = updateUser[key];
        })
        localStorage.setItem('user', JSON.stringify(data))
    }
    
    return (
        <div className='setting'>
            <div style={{height: "80px"}}>
                <img
                    className="setting_logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
            </div>
            <div className='setting_body'>
                <div className='setting_mid'>
                    <h1>Account</h1>
                    <form className='setting_form'>
                        <div className='setting_form_div'>
                            <label className='setting_form_label'>Name</label>
                            <input 
                                name="name"
                                type="text"
                                value={updateUser.name}
                                className='setting_form_input'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='setting_form_div'>
                            <label className='setting_form_label'>Email</label>
                            <input
                                name="email" 
                                type="email"
                                value={updateUser.email}
                                className='setting_form_input'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='setting_form_div'>
                            <label className='setting_form_label'>Country</label>
                            <input
                                name="country" 
                                type="text"
                                value={updateUser.country}
                                className='setting_form_input'
                                onChange={handleChange}
                            />
                        </div>
                        <div className='setting_form_div'>
                            <label className='setting_form_label'>Phone number</label>
                            <input
                                name="phoneNumber" 
                                type="text"
                                value={updateUser.phoneNumber}
                                className='setting_form_input'
                                onChange={handleChange}
                            />
                        </div>
                        <button className='setting_form_button' onClick={handleSubmit}>Update</button>
                    </form>
                    <div className='setting_password' onClick={() => navigate("/change_password")}>
                        <p>Change password</p>
                        <DoubleArrowIcon />
                    </div>
                    <div className='setting_password' onClick={() => navigate("/home")}>
                        <p>Home</p>
                        <DoubleArrowIcon />
                    </div>
                    <div className='setting_password'>
                        <p onClick={handleLogOut}>Logout</p>
                        <LogoutIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting 