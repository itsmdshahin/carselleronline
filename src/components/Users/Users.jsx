import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import "./users.scss";
import DELETE from "../../assets/deletelogo.svg";
import VIEW from "../../assets/delete.svg";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getAllUser');
        const userData = response.data.data.map((user) => ({
          id: user._id,
          name: user.name,
          email: user.email, // Assuming you want to display email
          mobile: user.mobile,
          age: 'N/A', // Placeholder since age is not in your user model
          verified: user.isVerified, // Assuming this is what you meant by status
        }));
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      // Call your backend API to delete the user
      await axios.delete(`http://localhost:5000/deleteUser/${id}`);
      // Filter out the user from the list
      setUsers(users.filter((user) => user.id !== id));
      console.log(`Deleted user with id: ${id}`);
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'mobile', headerName: 'Mobile', width: 150 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'verified', headerName: 'Verified', width: 120, renderCell: (params) => (params.value ? '✔️' : '✖️') },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <button className="deleteButton" onClick={() => deleteUser(params.id)}>
          <img src={DELETE} alt="Delete" />
        </button>
      ),
    },
  ];

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
      </div>
      <div className="dataGridContainer">
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={9}
          checkboxSelection
        />
      </div>
    </div>
  );
}
