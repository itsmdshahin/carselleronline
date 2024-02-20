import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import "./transcation.scss";

const Transcation = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/payment/transiction');
        const transactionData = response.data.map(txn => ({
          id: txn._id,
          seller: txn.seller,
          transaction: txn.transiction, // 'transiction' is used based on your backend model
          buyer: txn.buyer,
          amount: txn.amount,
          status: txn.status,
          date: new Date(txn.date).toLocaleDateString(),
        }));
        setTransactions(transactionData);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 220 },
    { field: 'seller', headerName: 'Seller', width: 130 },
    { field: 'transaction', headerName: 'Transaction', width: 200 },
    { field: 'buyer', headerName: 'Buyer', width: 130 },
    { field: 'amount', headerName: 'Amount', width: 130 },
    { field: 'status', headerName: 'Status', width: 120, renderCell: (params) => (params.value === 'true' ? '✔️' : '✖️') },
    { field: 'date', headerName: 'Date', width: 130 },
  ];

  return (
    <div className="transcation">
      <div className="transactionData">
        <h2>Transaction</h2>
        <DataGrid
          rows={transactions}
          columns={columns}
          pageSize={9}
          checkboxSelection
          className="dataGrid"
        />
      </div>
    </div>
  );
}

export default Transcation;
