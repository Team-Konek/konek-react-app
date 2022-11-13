import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "date", headerName: "Date", flex: 1 },
  { field: "id", headerName: "UserID", flex: 1 },
  { field: "description", headerName: "Description", flex: 6 },
  // { field: "id", headerName: "ID", width: 150 },
  // { field: "firstName", headerName: "First name", width: 150 },
  // { field: "lastName", headerName: "Last name", width: 150 },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
  // { field: "age", headerName: "Age", width: 150 },
];

const rows = [
  { id: 1000, date: "9/20/2022", description: "shiye has logged-in" },
  { id: 1001, date: "9/21/2022", description: "user (2313) has been created" },
  { id: 1002, date: "9/22/2022", description: "ray has logged-in" },
  { id: 1003, date: "9/23/2022", description: "matthew has logged-in" },
];

export default function UsersList() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
