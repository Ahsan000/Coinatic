import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Grid } from "@mui/material";
import TimelineIcon from "@mui/icons-material/Timeline";
import TransactionTabs from "../tabs/TransactionTabs";
import OrangeValue from "./mainTable/OrangeValue";
const columns = [
  { id: "transactionType", label: "Transaction Type", minWidth: 120 },
  { id: "date", label: "Date", minWidth: 120 },
  {
    id: "crypto",
    label: "Crypto",
    minWidth: 120,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "price",
    label: "Price",
    minWidth: 120,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 120,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(transactionType, date, crypto, price, status) {
  return {
    transactionType,
    date,
    crypto,
    price,
    status,
  };
}

const rows = [
  createData(
    "Lite Coin",
    "10/10/10",
    1324171354,
    <OrangeValue value=" 3287263" />,
    "Recieved"
  ),
  createData(
    "Neo",
    "10/10/10",
    1324171354,
    <OrangeValue value=" 3287263" />,
    "Recieved"
  ),
  createData(
    "Cardano",
    "10/10/10",
    1324171354,
    <OrangeValue value=" 3287263" />,
    "Recieved"
  ),
  createData(
    "Stellar",
    "10/10/10",
    1324171354,
    <OrangeValue value=" 3287263" />,
    "Recieved"
  ),
  createData(
    "EOS",
    "10/10/10",
    1324171354,
    <OrangeValue value=" 3287263" />,
    "Recieved"
  ),
  createData(
    "IOTA",
    "10/10/10",
    1324171354,
    <OrangeValue value=" 3287263" />,
    "Recieved"
  ),
  createData(
    "Monero",
    "10/10/10",
    1324171354,
    <OrangeValue value=" 3287263" />,
    "Recieved"
  ),
  createData(
    "NEM",
    "10/10/10",
    1324171354,
    <OrangeValue value=" 3287263" />,
    "Recieved"
  ),
  createData(
    "Tethar",
    "10/10/10",
    1324171354,
    <OrangeValue value=" 3287263" />,
    "Recieved"
  ),
  createData(
    "Tron",
    "10/10/10",
    1324171354,
    <OrangeValue value=" 3287263" />,
    "Recieved"
  ),
  createData(
    "VChain ",
    "10/10/10",
    1324171354,
    <OrangeValue value=" 3287263" />,
    "Recieved"
  ),
  createData(
    "Lisk",
    "10/10/10",
    1324171354,
    <OrangeValue value=" 3287263" />,
    "Recieved"
  ),
  createData(
    "Qtum",
    "10/10/10",
    1324171354,
    <OrangeValue value=" 3287263" />,
    "Recieved"
  ),
  createData(
    "QmiseGO",
    "10/10/10",
    1324171354,
    <OrangeValue value=" 3287263" />,
    "Recieved"
  ),
];

export default function TransactionTable() {
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
      <Grid
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
      >
        <Grid item>
          <TransactionTabs />
        </Grid>
        <Grid item>
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
                        backgroundColor: "#1c1b1b",
                        color: "#6c6d6e",
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
                            sx={{ fontSize: 12, color: "#6c6d6e" }}
                            align={column.align}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
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
        <TablePagination
          sx={{
            fontSize: 12,
            color: "#6c6d6e",
          }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
    </Paper>
  );
}
