import { createMuiTheme } from "@material-ui/core";
import { colors } from "./service";

const theme = createMuiTheme({
  palette: {
    primary: { main: colors.primary, light: "#bbb" },
    secondary: { main: colors.secondary }
  }
});

export default theme;
