import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import HomeIcon from "@mui/icons-material/Home";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import HandymanIcon from "@mui/icons-material/Handyman";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link } from "react-router-dom";

// Modal data
import {
  TextField,
  Stack,
  Grid,
  // Stack,
  Typography,
  Card,
  CardActions,
  CardContent,
  Modal,
  Box,
  Button,
  TextareaAutosize,
  IconButton,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import {
  CButtonPrimary,
  CButtonSpan,
} from "../styledComponents/StyledComponents";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

export default function Buttons() {
  // Modal Data
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [currency2, setCurrency2] = React.useState("");

  const handleChange2 = (event) => {
    setCurrency2(event.target.value);
  };
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [currency1, setCurrency1] = React.useState("");

  const handleChange1 = (event) => {
    setCurrency1(event.target.value);
  };
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  // const handleChange2 = (event) => {
  //   setCurrency2(event.target.value);
  // };
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row" spacing={2} sx={{ m: 2 }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <CButtonSpan size="small" variant="contained" color="secondary">
            <HomeIcon sx={{ mr: 1 }} />
            Dashboard
          </CButtonSpan>
        </Link>
        <Link to="buysell" style={{ textDecoration: "none" }}>
          <CButtonPrimary size="small" variant="contained">
            <PlaylistAddCheckIcon sx={{ mr: 1 }} />
            Buy/Sell
          </CButtonPrimary>
        </Link>
        <Link to="transactions" style={{ textDecoration: "none" }}>
          <CButtonPrimary size="small" variant="contained">
            <CompareArrowsIcon sx={{ mr: 1 }} />
            Transactions
          </CButtonPrimary>
        </Link>
        <CButtonPrimary size="small" variant="contained" onClick={handleOpen2}>
          <CurrencyExchangeIcon sx={{ mr: 1 }} />
          Exchange
        </CButtonPrimary>
        {/* Exchange Modal */}
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Card sx={{ minWidth: 275 }} sx={style}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Exchange</Typography>
                <IconButton onClick={handleClose2}>
                  <CloseIcon />
                </IconButton>
              </Stack>
              <CardActions>
                <Grid container spacing={1} justifyContent="space-around">
                  <Grid item flexGrow={6}>
                    <Stack direction="row" spacing={1}>
                      <TextField
                        id="filled-textarea"
                        label="Exchange"
                        placeholder="Bitcoin"
                        multiline
                        variant="filled"
                        fullWidth
                      />
                      <TextField
                        id="filled-textarea"
                        label="Recieve"
                        placeholder="Ether"
                        multiline
                        variant="filled"
                        fullWidth
                      />
                    </Stack>
                  </Grid>
                  <Grid item flexGrow={6}></Grid>
                </Grid>
              </CardActions>

              <CardActions>
                <Grid container spacing={1} justifyContent="space-around">
                  <Grid item flexGrow={6}>
                    <Typography>Enter Amount</Typography>
                  </Grid>
                  <Grid item flexGrow={6}>
                    <Typography>Recieved Amount</Typography>
                  </Grid>
                </Grid>
              </CardActions>
              <CardContent>
                <Stack
                  component="form"
                  spacing={1}
                  noValidate
                  autoComplete="off"
                >
                  <Stack direction="row" spacing={1}>
                    <TextField
                      id="filled-textarea"
                      // label="Amount"
                      placeholder="0.00000 BTC"
                      multiline
                      variant="filled"
                      fullWidth
                    />
                    <TextField
                      id="filled-textarea"
                      // label="Currency"
                      placeholder="0.00000 ETH"
                      multiline
                      variant="filled"
                      fullWidth
                    />
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <TextField
                      id="filled-textarea"
                      // label="Price"
                      placeholder="0.00000 USD"
                      multiline
                      variant="filled"
                      fullWidth
                    />
                    <TextField
                      id="filled-textarea"
                      // label="Price"
                      placeholder="0.00000 USD"
                      multiline
                      variant="filled"
                      fullWidth
                    />
                  </Stack>
                </Stack>
                <br />
              </CardContent>
              <CardActions>
                <CButtonPrimary size="small" fullWidth variant="contained">
                  Finalize
                </CButtonPrimary>
              </CardActions>
            </Card>
          </Box>
        </Modal>
        {/* Exchange Modal */}
        <CButtonPrimary size="small" variant="contained">
          <ForwardToInboxIcon sx={{ mr: 1 }} />
          Transfer
        </CButtonPrimary>
        <CButtonPrimary size="small" variant="contained">
          <HandymanIcon sx={{ mr: 1 }} />
          Settings
        </CButtonPrimary>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ m: 2 }}>
        <CButtonSpan
          size="small"
          variant="contained"
          color="secondary"
          onClick={handleOpen1}
        >
          <ArrowUpwardIcon sx={{ mr: 1 }} />
          Send
        </CButtonSpan>
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Card sx={{ minWidth: 275 }} sx={style}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Send Coin</Typography>
                <IconButton onClick={handleClose1}>
                  <CloseIcon />
                </IconButton>
              </Stack>
              <CardActions>
                <Grid container spacing={1} justifyContent="space-around">
                  <Grid item flexGrow={4}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Currency
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={currency1}
                        onChange={handleChange}
                        label="Currency"
                      >
                        <MenuItem value={10}>Bitcoin</MenuItem>
                        <MenuItem value={20}>Ether</MenuItem>
                        <MenuItem value={30}>Cardano</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item flexGrow={6}></Grid>
                </Grid>
              </CardActions>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                justifyContent="space-between"
              >
                <TextField
                  id="filled-textarea"
                  sx={{ ml: 1 }}
                  label="To"
                  placeholder="paste or scan address"
                  multiline
                  variant="filled"
                  fullWidth
                />

                <QrCodeScannerIcon />
              </Stack>
              {/* </Grid> */}
              <CardContent>
                <Stack
                  component="form"
                  spacing={1}
                  noValidate
                  autoComplete="off"
                >
                  <Typography>Amount</Typography>
                  <Stack direction="row" spacing={1}>
                    <TextField
                      id="filled-textarea"
                      // label="Amount"
                      placeholder="0.00000 BTC"
                      multiline
                      variant="filled"
                      fullWidth
                    />
                    <TextField
                      id="filled-textarea"
                      // label="Currency"
                      placeholder="0.00000 USD"
                      multiline
                      variant="filled"
                      fullWidth
                    />
                  </Stack>

                  <Stack spacing={1} justifyContent="flex-start">
                    <Typography>Description</Typography>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={4}
                      placeholder="Money for coffee"
                      fullWidth
                    />
                  </Stack>
                  <Stack>
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">
                        Transaction Fee
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={currency1}
                        onChange={handleChange1}
                        label="Transaction Fee"
                      >
                        <MenuItem value={30}>Special</MenuItem>
                        <MenuItem value={10}>Regular</MenuItem>
                        <MenuItem value={20}>Discount</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </Stack>
                <br />
              </CardContent>
              <CardActions>
                <CButtonPrimary size="small" fullWidth variant="contained">
                  Finalize
                </CButtonPrimary>
              </CardActions>
            </Card>
          </Box>
        </Modal>
        <CButtonPrimary
          size="small"
          variant="contained"
          style={{ backgroundColor: "#4095eb" }}
          onClick={handleOpen}
        >
          <ArrowDownwardIcon sx={{ mr: 1 }} />
          Request
          {/* Request Model */}
        </CButtonPrimary>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Card sx={{ minWidth: 275 }} sx={style}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography>Request Coin</Typography>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Stack>
              <CardActions>
                <Grid container spacing={1} justifyContent="space-around">
                  <Grid item flexGrow={4}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Currency
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={currency}
                        onChange={handleChange}
                        label="Currency"
                      >
                        <MenuItem value={10}>Bitcoin</MenuItem>
                        <MenuItem value={20}>Ether</MenuItem>
                        <MenuItem value={30}>Cardano</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item flexGrow={6}></Grid>
                </Grid>
              </CardActions>

              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                justifyContent="space-between"
              >
                <TextField
                  id="filled-textarea"
                  label="To"
                  sx={{ ml: 1 }}
                  placeholder="paste or scan address"
                  multiline
                  variant="filled"
                  fullWidth
                />
                <QrCodeScannerIcon />
              </Stack>
              {/* </Grid> */}
              <CardContent>
                <Stack
                  component="form"
                  spacing={1}
                  noValidate
                  autoComplete="off"
                >
                  <Typography>Amount</Typography>
                  <Stack direction="row" spacing={1}>
                    <TextField
                      id="filled-textarea"
                      // label="Amount"
                      placeholder="0.00000 BTC"
                      multiline
                      variant="filled"
                      fullWidth
                    />
                    <TextField
                      id="filled-textarea"
                      // label="Currency"
                      placeholder="0.00000 USD"
                      multiline
                      variant="filled"
                      fullWidth
                    />
                  </Stack>

                  <Stack spacing={1} justifyContent="flex-start">
                    <Typography>Description</Typography>
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={4}
                      placeholder="Money for coffee"
                      fullWidth
                    />
                  </Stack>
                </Stack>
                <br />
              </CardContent>
              <CardActions>
                <CButtonPrimary size="small" fullWidth variant="contained">
                  Finalize
                </CButtonPrimary>
              </CardActions>
            </Card>
          </Box>
        </Modal>
      </Stack>
    </Stack>
  );
}
