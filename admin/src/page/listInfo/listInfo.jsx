import './listInfo.scss'
import { useLocation } from 'react-router-dom'

const ListInfo = () => {
    const location = useLocation()
    const list = location.state.list
    
    return (
        <div className='admin_list_info'>
            <div style={{display: "flex", width: "540px", margin:"auto"}}>
                <div className='list_movie'>
                    <p style={{fontSize:"25px"}}>Title:</p>
                    <p style={{fontSize:"25px", color:"red", marginLeft:"10px"}}>{list.title}</p>
                </div>
                <div className='list_movie'>
                    <p style={{fontSize:"25px"}}>Type:</p>
                    <p style={{fontSize:"25px", color:"red", marginLeft:"10px"}}>{list.type}</p>
                </div>
                <div className='list_movie'>
                    <p style={{fontSize:"25px"}}>Genre:</p>
                    <p style={{fontSize:"25px", color:"red", marginLeft:"10px"}}>{list.genre}</p>
                </div>
            </div>
            <div>
                <h3>Movies id:</h3>
                {list.film.map((mv) => {
                    <p>{mv}</p>
                })}
            </div>
        </div>
    )
}

export default ListInfo