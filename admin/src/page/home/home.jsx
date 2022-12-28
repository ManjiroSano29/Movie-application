import './home.scss'
import Chart from '../../component/chart/chart'
import axios from 'axios'
import { useState, useEffect, useMemo } from 'react'

const AdminHome = () => {
    const months = useMemo(
        () => [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        []
      )
    const [userStat, setUserStat] = useState([])

    useEffect(() => {
        const getStat = async() =>{
            const res = await axios.get("http://localhost:5000/user/stats", 
            {
                headers:{
                    token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                }
            })
            const statList = res.data.sort((a, b) => {
                return a._id - b._id
            })
            statList.map(item => {
                setUserStat( prev => 
                    [
                        ...prev,
                        {name:  months[item._id - 1], "New User": item.total}
                    ]
                )
            })
        }
        getStat()
    }, [months])
    
    return (
        <div className='admin_home'>
            <Chart 
                data={userStat}
                grid
                dataKey = "New User"
                title="User analysis"
            />
        </div>
    )
}       

export default AdminHome