import { Link } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import './chartbox.scss';
import { ChartBoxUser } from '../../data.js';

// type Props = {
//     color : string,
//     icon : string,
//     title : string,
//     dataKey : string,
//     number : number | string,
//     percentage : number,
//     chartdata : Array<object> // Corrected the type for chartdata
// };

const ChartBox = (props) => {
    return (
        <div className="chartbox">
            <div className="boxinfo">
                <div className='title'>
                    
                    <span>{props.title}</span>

                </div>
                <h1>{props.number}</h1> 
                <Link to="/" style={{ color: props.color }}>
                    <span>View All</span>
                </Link>
            </div>
            <div className="chartinfo">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props.chartdata}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                            />
                            <Line
                                type="monotone"
                                dataKey={props.dataKey}
                                stroke={props.color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className="percentage" style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}>
                        {props.percentage}%
                    </span>
                    <span className='duration'>This month</span>
                </div>
            </div>
        </div>
    )
};

export default ChartBox;
