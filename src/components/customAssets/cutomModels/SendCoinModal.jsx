import * as React from "react";

import {
  TextField,
  Grid,
  Stack,
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

export default function SendCoinModal() {
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

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
              <Typography>Send Coin</Typography>
              <IconButton>
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
            <CardActions fullWidth>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                justifyContent="space-between"
              >
                <Stack>
                  <TextField
                    id="filled-textarea"
                    label="To"
                    placeholder="paste or scan address"
                    multiline
                    variant="filled"
                    fullWidth
                  />
                </Stack>
                <QrCodeScannerIcon />
              </Stack>
            </CardActions>
            {/* </Grid> */}
            <CardContent>
              <Stack component="form" spacing={1} noValidate autoComplete="off">
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
                    minRows={3}
                    placeholder="Money for coffee"
                    style={{ width: 200 }}
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
                      value={currency2}
                      onChange={handleChange2}
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
              <Button size="small" fullWidth variant="contained">
                Finalize
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}
