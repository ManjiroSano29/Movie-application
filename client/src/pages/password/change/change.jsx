import "./change.scss"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Change = () => {
    const navigate = useNavigate()
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const userData = {
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmNewPassword: confirmNewPassword
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const res = await axios.put(" http://localhost:5000/change", userData, {
                headers: {
                    token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
                }
            })
            setMessage(res.data.msg)
        }catch(e){
            if(e.response && e.response.status > 400){
                setError(e.response.data.msg)
            }
        }
    }

    return (
        <div className="change">
            <img
                className="change_logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt=""
            />
            <div className='change_container'>
                <form className='change_form'>
                    <h1>Change password</h1>
                    {message ? <p style={{color:'green', position:'absolute',marginTop:"-195px"}}>{message}</p> : <p style={{color:'red', position:'absolute',marginTop:"-195px"}}>{error}</p>}
                    <input
                        name="oldPassword" 
                        className='change_input'
                        type='password'
                        placeholder='Enter your current password'
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <input
                        name="newPassword" 
                        className='change_input'
                        type='password'
                        placeholder='Enter your new password'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <input
                        name="confirmNewPassword" 
                        className='change_input'
                        type='password'
                        placeholder='Confirm your new password'
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                    <button className='change_button' onClick={handleSubmit}>Submit</button>
                    <div className='setting_change_password' onClick={() => navigate("/setting")}>
                        <p>Back</p>
                        <DoubleArrowIcon />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Change