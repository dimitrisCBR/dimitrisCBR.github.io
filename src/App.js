import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import CustomPaper from "./components/CustomPaper";

function App() {

  let defaultMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light"

  const [darkMode, setDarkMode] = useState(defaultMode);

  const handleModeChange = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Header isDarkDefault={darkMode} toggleCallback={handleModeChange} />
          <About />
          <Projects />
        </CssBaseline>
      </ThemeProvider>
    </div >
  );
}

export default App;