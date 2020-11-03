import logo from "./logo.svg";
import "./App.css";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Component/Routes";
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container maxWidth='xl' style={{ height: "100vh" }}>
          <Routes />
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
