import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import { TransictionData } from '../../data';
import { Link } from 'react-router-dom';
import SideLogo from "../../assets/user.png";
import DELETE from "../../assets/deletelogo.svg";
import VIEW from "../../assets/delete.svg";
import { useEffect, useState } from 'react';

const TabelData = () => {
    
    console.log(TransictionData);
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'avater',
            headerName: "Avatar",
            width: 100,
            renderCell: (params) => {
                return <img src={params.row.avater || SideLogo} />
            }
        },
        {
            field: 'seller',
            headerName: 'Seller',
            width: 150,
            editable: true,
        },
        {
            field: 'buyer',
            headerName: 'Buyer',
            width: 150,
            editable: true,
        },
        {
            field: 'transiction',
            headerName: 'Transction No.',
            width: 150,
            editable: true,
        },
        {
            field: 'amount',
            headerName: 'Amount',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: "status",
            headerName: "Paid",
            width: 100,
            type: "boolean",
        },
        {
            field: 'date',
            headerName: 'Date',
            width: 150,
            editable: true,
        },
        {
            field: "actions",
            headerName: "Actions",
            width: 100,
            renderCell: (params) => {
                return <div className='action'>
                    <div className="view">
                        <Link to="/">
                            <img src={VIEW} alt="logo" />
                        </Link>
                    </div>
                    <div className="delete">
                        <Link to="/">
                            <img src={DELETE} alt="logo" />
                        </Link>
                    </div>
                </div>
            }

        }
    ];

    return (
        <div className="datatabel">
            <DataGrid
                className="datagrid"
                rows={TransictionData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                // Here serach filter addess slots
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnSelector
                disableColumnFilter
                disableDensitySelector
            />
        </div>
    );
}

export default TabelData
