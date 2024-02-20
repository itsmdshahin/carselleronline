import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './datatabel.scss';
import { rows } from '../../data';
import { Link } from 'react-router-dom';
import SideLogo from "../../assets/user.png";
import DELETE from "../../assets/deletelogo.svg";
import VIEW from "../../assets/delete.svg";

const DataTabel = () => {

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
            field: "status",
            headerName: "Verified",
            width: 100,
            type: "boolean",
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.name || ''} ${params.row.lastName || ''}`,
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
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                components={{
                    Toolbar: GridToolbar,
                }}
            />
        </div>
    );
}

export default DataTabel
