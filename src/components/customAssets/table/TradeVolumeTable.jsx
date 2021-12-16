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
  { id: "name", label: "Name", maxWidth: 120 },
  { id: "marketCap", label: "Market Cap", minWidth: 120 },
  {
    id: "price",
    label: "Price",
    // minWidth: 80,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "volume",
    label: "Volume 24h",
    minWidth: 120,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "circulatingSupply",
    label: "Circulating Supply",
    minWidth: 120,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "change",
    label: "Change 24h",
    minWidth: 120,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "graph",
    label: "Price Graph",
    minWidth: 120,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  name,
  marketCap,
  price,
  volume,
  circulatingSupply,
  change,
  graph
) {
  return { name, marketCap, price, volume, circulatingSupply, change, graph };
}

const rows = [
  createData(
    "Lite Coin",
    "IN",
    1324171354,
    3287263,
    3287263,
    3287263,
    <TimelineIcon />
  ),
  createData(
    "Neo",
    "CN",
    1403500365,
    9596961,
    3287263,
    3287263,
    <TimelineIcon />
  ),
  createData(
    "Cardano",
    "IT",
    60483973,
    301340,
    3287263,
    3287263,
    <TimelineIcon />
  ),
  createData(
    "Stellar",
    "US",
    327167434,
    9833520,
    3287263,
    3287263,
    <TimelineIcon />
  ),
  createData(
    "EOS",
    "CA",
    37602103,
    9984670,
    3287263,
    3287263,
    <TimelineIcon />
  ),
  createData(
    "IOTA",
    "AU",
    25475400,
    7692024,
    3287263,
    3287263,
    <TimelineIcon />
  ),
  createData(
    "Monero",
    "DE",
    83019200,
    357578,
    3287263,
    3287263,
    <TimelineIcon />
  ),
];

export default function TradeVolumeTable() {
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
      </Grid>
    </Paper>
  );
}
