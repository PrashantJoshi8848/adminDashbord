import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRow, usercolumns } from "../data/tableData";
import { Link } from "react-router-dom";
import { useState } from "react";

const DataTable = () => {
  const [data, setData] = useState(userRow);
  function handleremove(x) {
    setData(data.filter((e) => e.id !== x));
  }
  const actioncolum = [
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (props) => (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <button className="viewButton">View</button>
          </Link>
          <button
            className="RemoveButton"
            onClick={(e) => handleremove(props.row.id)}
          >
            Remove
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link
          to="/users/new"
          style={{ textDecoration: "none" }}
          className="links"
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={usercolumns.concat(actioncolum)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
