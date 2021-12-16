import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Grid, Typography } from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Link } from "react-router-dom";
import OrangeValue from "./mainTable/OrangeValue";

const columns = [
  { id: "type", label: "Transaction Type", maxWidth: 120 },
  { id: "date", label: "Date", minWidth: 120 },
  {
    id: "crypto",
    label: "Crypto",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "price",
    label: "Price",
    minWidth: 120,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 120,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(type, date, crypto, price, status) {
  return { type, date, crypto, price, status };
}
const rows = [
  createData(
    "Lite Coin",
    "IN",
    1324171354,
    <OrangeValue value="3287263" />,
    3287263
  ),
  createData("Neo", "CN", 1403500365, <OrangeValue value="3287263" />, 3287263),
  createData(
    "Cardano",
    "IT",
    60483973,
    <OrangeValue value="3287263" />,
    3287263
  ),
  createData(
    "Stellar",
    "US",
    327167434,
    <OrangeValue value="3287263" />,
    3287263
  ),
  createData("EOS", "CA", 37602103, <OrangeValue value="3287263" />, 3287263),
  createData("IOTA", "AU", 25475400, <OrangeValue value="3287263" />, 3287263),
];

export default function DashboardTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        mt: 1,
        backgroundColor: "#1c1b1b",
      }}
    >
      <Grid container justifyContent="center">
        <Grid item>
          <Typography sx={{ m: 1 }} variant="p">
            Recent Transactions
          </Typography>
          <TableContainer>
            <Table
              stickyHeader
              aria-label="sticky table"
              style={{ width: "70%" }}
            >
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      sx={{
                        fontSize: 12,
                        color: "#6c6d6e",
                        backgroundColor: "#1c1b1b",
                      }}
                      style={{ maxWidth: "5%" }}
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            style={{ maxWidth: "5%" }}
                            key={column.id}
                            sx={{ fontSize: 12 }}
                            align={column.align}
                          >
                            <Link
                              to="/singlecurrency"
                              style={{
                                textDecoration: "none",
                                color: "#6c6d6e",
                              }}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </Link>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Grid>
    </Paper>
  );
}
