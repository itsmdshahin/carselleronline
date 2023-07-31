import { Col, Container, Row, Table } from "react-bootstrap"
import './userlist.scss'
import { userData } from "../../data"


const Userlist = () => {
    return (
        <div className='userlist text-center'>
            <h2>User List</h2>
            <Table responsive>
                <thead>
                    <tr className="p1">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((users)=>(
                            <tr key={users.id}>
                            <td>{users.id}</td>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.password}</td>
                            <td>{users.phone}</td>
                            <td>{users.address}</td>
                        </tr>
                        ))
                    }
                  
                  
                </tbody>
            </Table>

        </div>
    )
}

export default Userlist