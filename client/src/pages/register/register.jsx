import './register.scss'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios"
const url = "http://localhost:5000/register"

const Register = () => {
    const [email, setEmail] = useState("")
    const [user, setUser] = useState({
        email: "",
        name:"",
        country:"",
        phoneNumber:"",
        password:"",
        confirmPassword:""
    })
    const [error, setError] = useState("")
    const [formErrors, setFormErrors] = useState("")
    
    const navigate = useNavigate()
    const navigateToLogin = () => {
        navigate("/login")
    }
   
    function isValidEmail(email){
        return /[a-z0-9]+@gmail.com/.test(user.email)
    }

    const handleClick = (e) => {
        !isValidEmail(e.target.value) ? setError("Email is invalid") : setEmail(user.email)
    }
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setFormErrors(validate(user))
        if(user.password.length >= 6 && user.password === user.confirmPassword){
            const userData = {
                email: user.email,
                name: user.name,
                country: user.country,
                phoneNumber: user.phoneNumber,
                password: user.password
            }
            try{
                await axios.post(url, userData)
                navigate("/login")
                
            }catch(error){
               if(error.response && error.response.status >= 400){
                    setError(error.response.data.msg)
               }
            }
        }
    }
    
    const validate = (user) => {
        const errors = {}
        if(!user.email){
            errors.email = "Email is required"
        }else if(!/[a-z0-9]+@gmail.com/.test(user.email)){
            errors.email = "Please enter valid email"
        }

        if(!user.name){
            errors.name = "Name is required"
        }

        if(!user.country){
            errors.country = "Country is required"
        }

        if(!user.phoneNumber){
            errors.phoneNumber = "Phone number is required"
        }else if(!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(user.phoneNumber)){
            errors.phoneNumber = "Please enter valid phone number"
        }

        if(!user.password){
            errors.password = "Password is required"
        }else if(user.password.length < 6){
            errors.password = "Password is at least 6 characters "
        }

        if(!user.confirmPassword){
            errors.confirmPassword = "Confirm password is required"
        }else if(user.confirmPassword !== user.password){
            errors.confirmPassword = "Passwords are not matched"
        }

        return errors
    }

    return (
        <div className='register'>
            <div className='register_navbar'>
                <img
                    className='register_logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
                <button className='sign_in' onClick={navigateToLogin}>Sign In</button>
            </div>
                {!email ? (
                    <div className='register_body'>
                        <div className='register_desc'>
                            <p style={{fontSize: "80px", fontWeight:"200px"}}>Unlimited movies, TV shows, and more.</p>
                            <p style={{fontSize: '30px', marginTop:"-55px"}}>Watch anywhere. Cancel anytime.</p>
                            <p style={{fontSize: '25px'}}>Ready to watch? Enter your email to create or restart your membership.</p>
                        </div>
                        <div className='register_email'>
                            <input
                                name="email"
                                className='register_input' 
                                placeholder='Email address'
                                onChange={handleChange}
                                value={user.email}
                            />
                            <button className='register_button' onClick={handleClick}>
                                Get Started
                            </button>
                            {error && <p style={{color: 'red'}}>{error}</p>}
                        </div>
                    </div>
                ): (
                    <div className='register_container'>
                        <form className='register_form' >
                            <h1 style={{textAlign: 'center', fontSize: '40px', color: 'white'}}>Complete your registration</h1>
                            <input 
                                name="email"
                                className='register_input'
                                value={user.email}
                                placeholder="Enter your email"
                                onChange={handleChange}
                            />
                            {error ? <p className='register_error'>{error}</p> : <p className='register_error'>{formErrors.email}</p>}
                            <input
                                name="name"
                                className='register_input'
                                placeholder='Enter your name'
                                onChange={handleChange}
                                value={user.name}
                            />
                            <p className='register_error'>{formErrors.name}</p>

                            <input
                                name="country"
                                className='register_input'
                                placeholder='Enter your country'
                                onChange={handleChange}
                                value={user.country}
                            />
                            <p className='register_error'>{formErrors.country}</p>

                            <input
                                name="phoneNumber"
                                className='register_input'
                                placeholder='Enter your phone number'
                                onChange={handleChange}
                                value={user.phoneNumber}
                            />
                            <p className='register_error'>{formErrors.phoneNumber}</p>

                            <input 
                                name="password"
                                className='register_input'
                                type='password'
                                placeholder='Enter your password'
                                onChange={handleChange}
                                value={user.password}
                            />
                            <p className='register_error'>{formErrors.password}</p>

                            <input 
                                name="confirmPassword"
                                className='register_input'
                                type="password"
                                placeholder='Confirm password'
                                onChange={handleChange}
                                value={user.confirmPassword}
                            />
                            <p className='register_error'>{formErrors.confirmPassword}</p>
                            
                            <button type='submit' className='register_button' onClick={handleSubmit}>Register</button>
                        </form>
                    </div>
                )}
        </div>
    )
}

export default Register