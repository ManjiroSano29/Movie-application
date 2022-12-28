import './login.scss'
import { useState, useContext } from 'react'
import { AuthContext } from '../../context/authContext/AuthContext'
import { loginApi } from '../../context/authContext/callApi'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { isFetching, dispatch } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        loginApi({ email, password }, dispatch)
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
                    <input
                        name="email"
                        className='login_input' 
                        placeholder='Enter your email'
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                    
                    <input
                        className='login_input'
                        type="password"
                        placeholder='Enter your password'
                        onChange = {(e) => setPassword(e.target.value)}
                    />

                    <button className='login_button' onClick={handleLogin} disabled={isFetching}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login