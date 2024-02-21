import { useEffect } from "react";

export const userData = [

    {
        id: 1,
        name: "Shahin",
        email: "admin@gmai.com",
        phone: "016383833",
        password: "Pass123@",
        address: "UK"
    },
    {
        id: 2,
        name: "Amira",
        email: "amira@gmai.com",
        phone: "01622283833",
        password: "Pass123@",
        address: "UK"
    },
    {
        id: 3,
        name: "Shahin",
        email: "admin@gmai.com",
        phone: "016383833",
        password: "Pass123@",
        address: "UK"
    },
    {
        id: 4,
        name: "Shahin",
        email: "admin@gmai.com",
        phone: "016383833",
        password: "Pass123@",
        address: "UK"
    },
    {
        id: 5,
        name: "Enas",
        email: "enas@gmai.com",
        phone: "01454583833",
        password: "Pass123@",
        address: "USA"
    },
    {
        id: 1,
        name: "Shahin",
        email: "admin@gmai.com",
        phone: "016383833",
        password: "Pass123@",
        address: "UK"
    },
    {
        id: 2,
        name: "Amira",
        email: "amira@gmai.com",
        phone: "01622283833",
        password: "Pass123@",
        address: "UK"
    },
    {
        id: 3,
        name: "Shahin",
        email: "admin@gmai.com",
        phone: "016383833",
        password: "Pass123@",
        address: "UK"
    },
    {
        id: 4,
        name: "Shahin",
        email: "admin@gmai.com",
        phone: "016383833",
        password: "Pass123@",
        address: "UK"
    },
    {
        id: 5,
        name: "Enas",
        email: "enas@gmai.com",
        phone: "01454583833",
        password: "Pass123@",
        address: "USA"
    },
]



export const topDealUsers = [
    {
        id: 1,
        img: "https://itoolapk.com/wp-content/uploads/2023/07/Linkedin-removebg-preview-1.png",
        username: "SHAHINUR",
        email: "mdshahinur@gmail.com",
        amount: "$56000",
    },
    {
        id: 2,
        img: "https://itoolapk.com/wp-content/uploads/2023/07/Linkedin-removebg-preview-1.png",
        username: "SHAHINUR",
        email: "mdshahinur@gmail.com",
        amount: "$56000",
    },
    {
        id: 3,
        img: "https://itoolapk.com/wp-content/uploads/2023/07/Linkedin-removebg-preview-1.png",
        username: "SHAHINUR",
        email: "mdshahinur@gmail.com",
        amount: "$56000",
    },
    {
        id: 4,
        img: "https://itoolapk.com/wp-content/uploads/2023/07/Linkedin-removebg-preview-1.png",
        username: "SHAHINUR",
        email: "mdshahinur@gmail.com",
        amount: "$56000",
    },
    {
        id: 5,
        img: "https://itoolapk.com/wp-content/uploads/2023/07/Linkedin-removebg-preview-1.png",
        username: "SHAHINUR",
        email: "mdshahinur@gmail.com",
        amount: "$56000",
    },
];

export const ChartBoxUser = {
    id: 1,
    color: "#8884d8",
    icon: "./assets/user.png",
    title: "Total Visitor",
    dataKey: "users",
    number: "20",
    percentage: -49,
    chartdata: [
        {
            name: "Sun", users: 1
        },
        {
            name: "Mon", users: 4
        },
        {
            name: "Tue", users: 8
        },
        {
            name: "Wed", users: 3
        },
        {
            name: "Thu", users: 6
        },
        {
            name: "Fri", users: 5
        },
        {
            name: "Sat", users: 3
        }
    ],
}


export const Profite = {
    id: 1,
    color: "gold",
    icon: "./assets/user.png",
    title: "Total Profit",
    dataKey: "users",
    number: "$225",
    percentage: 30,
    chartdata: [
        {
            name: "Sun", users: 2
        },
        {
            name: "Mon", users: 3
        },
        {
            name: "Tue", users: 4
        },
        {
            name: "Wed", users: 4
        },
        {
            name: "Thu", users: 3
        },
        {
            name: "Fri", users: 1
        },
        {
            name: "Sat", users: 6
        }
    ],
}


export const BarChartdata = {
    color: "#FF8042",
    title: "Total Visitor",
    dataKey: "visit",
    chartData: [
        {
            name: "Sun", visit: 2340
        },
        {
            name: "Mon", visit: 4340
        },
        {
            name: "Tue", visit: 5400
        },
        {
            name: "Wed", visit: 6600
        },
        {
            name: "Thu", visit: 3880
        },
        {
            name: "Fri", visit: 8520
        },
        {
            name: "Sat", visit: 4900
        }
    ],
}

export const ChartBoxUsers = {
    id: 1,
    color: "#434343",
    icon: "./assets/user.png",
    title: "Total Users",
    dataKey: "users",
    number: "5,233",
    percentage: 79,
    chartdata: [
        {
            name: "Sun", users: 100
        },
        {
            name: "Mon", users: 240
        },
        {
            name: "Tue", users: 700
        },
        {
            name: "Wed", users: 800
        },
        {
            name: "Thu", users: 880
        },
        {
            name: "Fri", users: 950
        },
        {
            name: "Sat", users: 1900
        }
    ],
}

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status: true },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, status: true },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Rahman', firstName: 'Shahinur', age: 16, status: true },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'MOSTAFA', firstName: 'Amira', age: 15 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: true },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status: true },
];


// export let TransictionData = {};

// export async function fetchTransictionData() {
//   try {
//     const response = await fetch('http://localhost:5000/api/payment/transiction');
//     const data = await response.json();
//     TransictionData = data;
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error; // Re-throw the error to handle it in the component or other parts of your application
//   }
// }
export const TransictionData = [
    {
        id: 1,
        seller: 'Enas',
        buyer: 'Alex',
        transiction: 'BXB121XBBS',
        amount: '$10000',
        date: '25/05/2023',
        status: true,
    },
    {
        id: 2,
        name: 'Shahin',
        seller: 'Shahin',
        buyer: 'Emon',
        transiction: 'BXB121XBBS',
        amount: '$250000',
        date: '12/09/2023',
    },
    {
        id: 3,
        name: 'Amira',
        seller: 'Amira',
        buyer: 'Aryan',
        transiction: 'BXB121XBBS',
        amount: '$15000',
        date: '01/08/2023',
    },
];

// useEffect(() => {
//     // Fetch data from the server when the component mounts
//     fetch('http://localhost:5000/api/payment/transiction')
//         .then((response) => response.json()) // Convert the response to JSON
//         .then((data) => setTransictionData(data)) // Set the fetched data to the 'rows' state
//         .catch((error) => console.error('Error fetching data:', error));
// }, []);
 