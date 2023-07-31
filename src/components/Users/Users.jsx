import "./users.scss";
import DataTabel from "../dataTabel/DataTabel";
 

export default function Users() {
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add a New Users</button>
      </div> 
      <DataTabel />
    </div>
  )
}
