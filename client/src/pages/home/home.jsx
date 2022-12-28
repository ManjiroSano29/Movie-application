import './home.scss'
import NavBar from "../../components/navbar/navbar"
import Feature from "../../components/feature/feature"
import Lists from "../../components/lists/lists"
import { useState, useEffect } from 'react'
import axios from "axios"

const HomePage = ({type}) => {
    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)
    
    useEffect(() => {
        const getList = async () => {
            const res = await axios.get(`http://localhost:5000/list${type ? "?type=" + type : ""}${
                genre ? "&genre=" + genre : ""
              }`,
              {
                headers: {
                    token:
                    "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
                },
              }
            )
            setLists(res.data)
        }
        getList()
    }, [type,genre])
    
    return (
        <div className="home">
            <NavBar />
            <Feature type={type} setGenre={setGenre} />
            {lists.map((list) => (
                <Lists list={list} />
            ))}
    </div>
  )
}
export default HomePage