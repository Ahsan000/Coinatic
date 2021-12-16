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
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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

export default function ExchangeModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <Typography>Exchange</Typography>
              <IconButton>
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
              <Stack component="form" spacing={1} noValidate autoComplete="off">
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
