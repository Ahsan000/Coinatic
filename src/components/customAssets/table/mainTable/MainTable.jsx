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
import TinyLineChart from "../../chart/lineCharts/TinyLineChart";
import CoinTitle from "./CoinTitle";
import OrangeValue from "./OrangeValue";
import GreenValue from "./GreenValue";

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
    <CoinTitle text={"LiteCoin"} />,
    "IN",
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <GreenValue value="3287263" />,
    <TinyLineChart />
  ),
  createData(
    <CoinTitle text={"Neo"} />,
    "CN",
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <GreenValue value="3287263" />,
    <TinyLineChart />
  ),
  createData(
    <CoinTitle text={"Cardano"} />,
    "IT",
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <GreenValue value="3287263" />,
    <TinyLineChart />
  ),
  createData(
    <CoinTitle text={"Stellar"} />,
    "US",
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <GreenValue value="3287263" />,
    <TinyLineChart />
  ),
  createData(
    <CoinTitle text={"EOS"} />,
    "CA",
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <GreenValue value="3287263" />,
    <TinyLineChart />
  ),
  createData(
    <CoinTitle text={"IOTA"} />,
    "AU",
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <GreenValue value="3287263" />,
    <TinyLineChart />
  ),
  createData(
    <CoinTitle text={"Monero"} />,
    "DE",
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <GreenValue value="3287263" />,
    <TinyLineChart />
  ),
  createData(
    <CoinTitle text={"Dash"} />,
    "IE",
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <GreenValue value="3287263" />,
    <TinyLineChart />
  ),
  createData(
    <CoinTitle text={"NEM"} />,
    "MX",
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <GreenValue value="3287263" />,
    <TinyLineChart />
  ),
  createData(
    <CoinTitle text={"Tether"} />,
    "JP",
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <GreenValue value="3287263" />,
    <TinyLineChart />
  ),
  createData(
    <CoinTitle text={"Tron"} />,
    "FR",
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <GreenValue value="3287263" />,
    <TinyLineChart />
  ),
  createData(
    <CoinTitle text={"VChain"} />,
    "GB",
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <GreenValue value="3287263" />,
    <TinyLineChart />
  ),
  createData(
    <CoinTitle text={"Lisk"} />,
    "RU",
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <GreenValue value="3287263" />,
    <TinyLineChart />
  ),
  createData(
    <CoinTitle text={"Qtum"} />,
    "NG",
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <GreenValue value="3287263" />,
    <TinyLineChart />
  ),
  createData(
    <CoinTitle text={"QmiseGo"} />,
    "BR",
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <OrangeValue value="1324171354" />,
    <GreenValue value="3287263" />,
    <TinyLineChart />
  ),
];

export default function MainTable() {
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
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          sx={{ color: "#6c6d6e" }}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
    </Paper>
  );
}
