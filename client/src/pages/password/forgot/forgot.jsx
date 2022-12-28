import './forgot.scss'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Forgot = () => {
    const navigate = useNavigate()
    const [email ,setEmail] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:5000/forgot", {email: email})
            setMessage(res.data.msg)
            setError("")
        }catch(e){
            if(e.response && e.response.status >= 400){
                setError(e.response.data.msg)
           }
        }
    }
    
    return (
        <div className='forgot'>
            <div className='forgot_navbar'>
                <img 
                    className='forgot_logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=''
                />
                <p className='forgot_login' onClick={() => navigate("/login")}>Login</p>
            </div>
            <div className='forgot_container'>
                <form className='forgot_form'>
                    <h1>Forgot password</h1>
                    <p style={{fontSize: '20px'}}>We'll email you with instruction to reset your password</p>
                    <input
                        name="email" 
                        className='forgot_input'
                        type='email'
                        placeholder='Enter your email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <button className='forgot_button' onClick={handleSubmit}>Send email</button>
                    {error ?
                        <p style={{color:'red', fontSize:"20px"}}>{error}</p>: 
                        <p style={{color:'green', fontSize:"20px"}}>{message}</p>
                    }
                </form>
            </div>
        </div>
    )
}

export default Forgot