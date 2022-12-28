import "./reset.scss"
import { useEffect, useState, Fragment } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const Reset = () => {
    const [valid, setValid] = useState(false)
    const [newPassword, setNewPassword] = useState("")
    const [confirmNew, setConfirmNew] = useState("")
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const param = useParams()
    const url = `http://localhost:5000/reset/${param.token}`

    useEffect(() => {
        const verify = async() => {
            await axios.get(url)
            setValid(true)
        }
        verify()
    }, [param, url])

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const res = await axios.put(url, {newPassword, confirmNew})
            setMessage(res.data.msg)
            setError("")
        }catch(e){
            if(e.response && e.response.status >= 400){
                setError(e.response.data.msg)
           }
        }
    }

    return (
        <Fragment>
            {valid ? (
            <div className="reset">
                <img
                    className="reset_logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
                <div className='reset_container'>
                    <form className='reset_form'>
                        <h1>Reset password</h1>
                        
                        <input 
                            className='reset_input'
                            name="newPassword"
                            type='password'
                            placeholder='Enter your new password'
                            value={newPassword}
                            onChange={e => setNewPassword(e.target.value)}
                        />
    
                        <input 
                            className='reset_input'
                            name="confirmNew"
                            type='password'
                            placeholder='Confirm your new password'
                            value={confirmNew}
                            onChange={e => setConfirmNew(e.target.value)}
                        />
                        <button className='reset_button' onClick={handleSubmit}>Submit</button>
                        {error ?
                            <p style={{color:'red', fontSize:"20px"}}>{error}</p>: 
                            <p style={{color:'green', fontSize:"20px"}}>{message}</p>
                        }
                    </form>
                </div>
            </div>
            ): (
                <h1>404 not found</h1>
            )}
        </Fragment>
    )
}

export default Reset