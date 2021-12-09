import React, {useState} from 'react'
import './UserList.scss'
import { Link } from 'react-router-dom'
import { userRows } from '../../dummyData';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";

const UserList = () => {
    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id)) // id 가 로우id 랑 같으면 로우에서 빼버린다.
        
    }
  

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "user",
          headerName: "User",
          width: 200,
          renderCell: (params) => {            
            return (
              <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.username}
              </div>
            );
          },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
        },
        {
          field: "transaction",
          headerName: "Total Spent",
          width: 160,
        },
        {
          field: "action",
          headerName: " ",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/user/" + params.row.id}>
                  <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="userListDelete"
                  onClick={() => handleDelete(params.row.id)}
                />
              </>
            );
          },
        },
    ];    
    return (
        <div className="userList">
            <DataGrid rows={data} columns={columns} pageSize={6} rowsPerPageOptions={[6]} checkboxSelection disableSelectionOnClick />
        </div>
    )
}

export default UserList