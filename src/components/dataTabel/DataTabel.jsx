import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './datatabel.scss'; 
import { rows } from '../../data';
import { Link } from 'react-router-dom';
import SideLogo from "../../assets/user.png";

const DataTabel = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 }, 
        {
            field: 'avater',
            headerName: "Avatar",
            width:100,
            renderCell: (params)=>{
                return  <img src={params.row.avater || SideLogo } />
            }
        },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field:"status",
            headerName:"Verified",
            width:100,
            type:"boolean",
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
            field:"actions",
            headerName:"Actions",
            width:100,
            renderCell: (params)=>{
                return <div className='action'>
                    <Link to="/">
                        <img src={SideLogo} alt="logo"/>
                    </Link>
                    <div className="view">View</div>
                    <div className="delete">Delete</div>
                </div>
            }

        }
    ];
 
    return (
        <div className="datatabel">
            <DataGrid
                className="datagrid"
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                             pageSize: 10,
                        },
                    },
                }}
                // Here serach filter addess slots
                slots={{toolbar:GridToolbar}}
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

export default DataTabel
