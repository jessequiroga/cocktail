import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LocalBar from "@material-ui/icons/LocalBar";
import CocktailList from "./components/CocktailList";
import CocktailFilter from "./components/CocktailFilter";
import cocktails from "./data/cocktails.json";
import ingredients from "./data/ingredients.json";
import useFilter from "./hooks/useFilter";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

function App() {
  //const [selectedIngredients, setIngredients] = useState([]);
  //const [conjunction, setConjunction] = useState("and");
  const [filter, setFilter] = useFilter({});

  return (
    <MuiThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <LocalBar />
          <Typography color="inherit">Cocktails</Typography>
        </Toolbar>
      </AppBar>

      <CocktailFilter
        allIngredients={ingredients}
        filter={filter}
        setFilter={setFilter}
      />

      <CocktailList
        filter={filter}
        cocktails={cocktails.sort((a, b) => (a.name > b.name ? 1 : -1))}
      />
    </MuiThemeProvider>
  );
}

export default App;
