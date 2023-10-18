import { Col, Container, Row, Table } from "react-bootstrap";
import './userlist.scss';
import { userData } from "../../data";
import { useEffect, useState } from "react";
import axios from 'axios';


const Userlist = (userData) => {
    
    const [data, setData] = useState([]);

 useEffect(()=>{
    fetch("http://localhost:5000/getAllUser",{
      method: "GET",
    })
    .then((res)=> res.json())
    .then((data) => {
        console.log(data, "userData");
        setData(data.data);
    });
 }, []);

    return (
        <div className='userlist text-center'>
            <h2>User List</h2>
            <Table responsive>
                <thead>
                    <tr className="p1">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        {/* <th>Password</th> */}
                        <th>Phone</th>
                        {/* <th>Address</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user)=>(
                            <tr key={user._id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            {/* <td>{user.password}</td> */}
                            <td>{user.mobile}</td>
                            {/* <td>{users.address}</td> */}
                        </tr>
                        ))
                    }
                  
                  
                </tbody>
            </Table>

        </div>
    )
}

export default Userlist