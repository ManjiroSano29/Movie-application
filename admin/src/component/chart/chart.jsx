import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const Chart = ({data, dataKey, title}) => {
    return (
        <div className='chart'>
            <h2 className='chart_name'>{title}</h2>
            <ResponsiveContainer width="100%" height="80%" margin={{left:0}}>
                <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey={dataKey} stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}  

export default Chart
