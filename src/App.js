import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
// import { Paper } from "@mui/material";
import HomePage from "./components/HomePage";
import SingleCurrency from "./components/SingleCurrency";
import Dashboard from "./components/Dashboard";
import TransactionPage from "./components/TransactionPage";
import BuySellPage from "./components/BuySellPage";
import { Paper } from "@mui/material";
// import { CPaper } from "./components/customAssets/styledComponents/StyledComponents";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#6e6f70",
      contrastText: "#d5dde1",
    },
    secondary: {
      main: "#eb8820",
      contrastText: "#d5dde1",
    },
    info: {
      main: "#4095eb",
      contrastText: "#d5dde1",
    },
  },

  typography: {
    // fontWeight: "bold",
    fontFamily: "PT Sans, sans-serif ,Readex Pro",
    span: {
      // random text orange
      color: "#eb8820",
    },
    subtitle1: {
      //random green color
      color: "#4eb929",
    },
    subtitle2: {
      // dark grey(Text Head Tabs)
      color: "#6c6d6e",
    },
    p: {
      // random text
      color: "#e2ebef",
    },
  },
});
function App() {
  return (
    <Paper className="App" style={{ backgroundColor: "#1c1b1b" }}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/buysell">
              <BuySellPage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/transactions">
              <TransactionPage />
            </Route>
            <Route path="/singlecurrency">
              <SingleCurrency />
            </Route>
            <Route path="/homepage">
              <HomePage />
            </Route>
          </Switch>
        </Router>

        {/* <SingleCurrencyMarkets /> */}
        {/* <TradeVolume /> */}
      </ThemeProvider>
    </Paper>
  );
}

export default App;
