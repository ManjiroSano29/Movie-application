import './login.scss'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../context/authContext/AuthContext'
import { login } from '../../context/authContext/callApi'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {dispatch, error} = useContext(AuthContext)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        login({ email, password }, dispatch)
    }
   
    return (
        <div className='login'>
            <img 
                className='login_logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt=""                
                />
            <div className='login_container'>
                <form className='login_form'>
                    <h1 style={{textAlign: 'center', fontSize: '40px', color: 'white'}}>Login</h1>
                    
                    {error && <p style={{color:'red', position:'absolute', marginTop:"80px"}}>{error}</p>}
                    <input
                        name="email"
                        className='login_input' 
                        placeholder='Enter your email'
                        onChange={e => setEmail(e.target.value)}
                        />
                    
                    <input
                        name="password"
                        className='login_input'
                        type="password"
                        placeholder='Enter your password'
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className='login_button' onClick={handleSubmit}>Login</button>
                    <div className='login_new'>
                        <p style={{color: 'lightgray'}}>New to Netflix?</p>
                        <p style={{marginLeft: '10px', cursor: 'pointer'}} onClick={() => navigate("/")}>Sign up now</p>
                    </div>
                    <p className='login_forgot' onClick={() => navigate("/forgot_password")}> Do you need help?</p>
                </form>
            </div>
        </div>
    )
}

export default Login