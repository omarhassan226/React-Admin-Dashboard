import Navbar from "./scenes/global/Navbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <main className="content">
              <Navbar />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>

  );
}

export default App;
