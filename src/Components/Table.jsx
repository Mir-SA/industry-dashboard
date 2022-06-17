import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, op, cp, lp, clp, vol) {
  return { name, op, cp, lp, clp, vol };
}

const rows = [
  createData("REL", 159, 6.0, 24, 4.0, 100),
  createData("TCS", 237, 9.0, 37, 4.3, 100),
  createData("INFY", 262, 16.0, 24, 6.0, 100),
  createData("HDFCBANK", 305, 3.7, 67, 4.3, 100),
  createData("ITC", 356, 16.0, 49, 3.9, 100),
];

export default function BasicTable() {
  return (
    <TableContainer sx={{ height: 400 }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Symbols</TableCell>
            <TableCell align="right">Open Price</TableCell>
            <TableCell align="right">High Price</TableCell>
            <TableCell align="right">Low Price</TableCell>
            <TableCell align="right">Close Price</TableCell>
            <TableCell align="right">Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.op}</TableCell>
              <TableCell align="right">{row.cp}</TableCell>
              <TableCell align="right">{row.lp}</TableCell>
              <TableCell align="right">{row.clp}</TableCell>
              <TableCell align="right">{row.vol}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
