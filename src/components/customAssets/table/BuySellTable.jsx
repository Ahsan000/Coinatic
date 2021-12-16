import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Grid } from "@mui/material";

const columns = [
  {
    id: "amountUSD1",
    label: "Amount(USD)",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "amountBTC",
    label: "Amount(BTC)",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "amountUSD2",
    label: "Amount(USD)",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(amountUSD1, amountBTC, amountUSD2) {
  return { amountUSD1, amountBTC, amountUSD2 };
}

const rows = [
  createData(1324171354, 3287263, 3287263),
  createData(1403500365, 9596961, 3287263),
  createData(301340, 3287263, 3287263),
  createData(9833520, 3287263, 3287263),
  createData(37602103, 9984670, 3287263),
  createData(25475400, 7692024, 3287263),
  createData(83019200, 357578, 3287263),
  createData(4857000, 70273, 3287263),
  createData(126577691, 1972550, 3287263),
];

export default function BuySellTable() {
  //   const [page, setPage] = React.useState(0);
  //   const [rowsPerPage, setRowsPerPage] = React.useState(10);

  //   const handleChangePage = (event, newPage) => {
  //     setPage(newPage);
  //   };

  //   const handleChangeRowsPerPage = (event) => {
  //     setRowsPerPage(+event.target.value);
  //     setPage(0);
  //   };

  return (
    <Paper
      sx={{
        width: "fit-content",
        overflow: "hidden",
        mt: 1,
        backgroundColor: "#1c1b1b",
      }}
    >
      <Grid container justifyContent="center">
        <Grid item>
          <TableContainer>
            <Table
              stickyHeader
              aria-label="sticky table"
              style={{ width: "100%" }}
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
                      style={{ minWidth: "10%" }}
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
                            style={{ minWidth: "10%" }}
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
      </Grid>
    </Paper>
  );
}

{
  /* <TablePagination
  rowsPerPageOptions={[10, 25, 100]}
  component="div"
  count={rows.length}
  rowsPerPage={rowsPerPage}
  page={page}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/> */
}
