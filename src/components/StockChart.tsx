import React, { useContext} from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataContext } from '../context';



const StockChart: React.FC = () => {
    //@ts-ignore
    
    const{stockData, finalData, selectedOption} = useContext(DataContext)
  
    return (                                                         
        <div>
            <h3 className='text-sm italic'>{selectedOption} Stock Price Chart</h3>
            {stockData && (
               <ResponsiveContainer width="100%" height={550}>
               <AreaChart
                //@ts-ignore
                data={Object.values(finalData).map(item => ({ time: item['original'], price:(item.transformed.price)})).reverse()}
                >
                   <CartesianGrid strokeDasharray="3 3" />
                   <XAxis dataKey="time" />
                   <YAxis  domain={['auto', 'auto']} />
                   <Tooltip />
                   <Legend />
                   <defs>
                     <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="15%" stopColor="#8884d8" stopOpacity={0.8} />
                       <stop offset="85%" stopColor="#8884d8" stopOpacity={0} />
                     </linearGradient>
                   </defs>
                   <Area type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={3} dot={{ stroke: '#ffff', strokeWidth: 1 }} fill="url(#colorUv)" />
               </AreaChart>
           </ResponsiveContainer>
            )}
        </div>
    );
};

export default StockChart;

