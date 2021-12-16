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

const columns = [
  { id: "source", label: "Source", maxWidth: 120 },
  { id: "pair", label: "Pair", minWidth: 120 },
  {
    id: "volume24",
    label: "Volume 24h",
    // minWidth: 80,
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
    id: "volume",
    label: "Volume %",
    minWidth: 120,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "update",
    label: "updated",
    minWidth: 120,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(source, pair, volume24, price, volume, update) {
  return { source, pair, volume24, price, volume, update };
}

const rows = [
  createData("Lite Coin", "IN", 1324171354, 3287263, 3287263, "Recently"),
  createData("Neo", "CN", 1403500365, 9596961, 3287263, "Recently"),
  createData("Cardano", "IT", 60483973, 301340, 3287263, "Recently"),
  createData("Stellar", "US", 327167434, 9833520, 3287263, "Recently"),
  createData("EOS", "CA", 37602103, 9984670, 3287263, "Recently"),
  createData("IOTA", "AU", 25475400, 7692024, 3287263, "Recently"),
  createData("Monero", "DE", 83019200, 357578, 3287263, "Recently"),
  createData("Dash", "IE", 4857000, 70273, 3287263, "Recently"),
  createData("NEM", "MX", 126577691, 1972550, 3287263, "Recently"),
  createData("Tethar", "JP", 126317000, 377973, 3287263, "Recently"),
  createData("Tron", "FR", 67022000, 640679, 3287263, "Recently"),
  createData("VChain ", "GB", 67545757, 242495, 3287263, "Recently"),
  createData("Lisk", "RU", 146793744, 17098246, 3287263, "Recently"),
  createData("Qtum", "NG", 200962417, 923768, 3287263, "Recently"),
  createData("QmiseGO", "BR", 210147125, 8515767, 3287263, "Recently"),
];

export default function MarketsTable() {
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
    <Paper sx={{ width: "100%", overflow: "hidden", mt: 1 }}>
      <Grid container justifyContent="center">
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
                      sx={{ fontSize: 12 }}
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
        {/* <Grid item>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid> */}
      </Grid>
    </Paper>
  );
}
