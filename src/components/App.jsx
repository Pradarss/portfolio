import React from "react";
import LeftComponent from "./LeftComponents/LeftComponent";
import RightComponent from "./RightComponents/RightComponent";
import { BackgroundArea } from "./styles";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  }); 
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}> 
      <>
        {isSmallScreen ? (
          <BackgroundArea>
            <LeftComponent />
            <RightComponent />
          </BackgroundArea>
        ) : (
          <>
            <LeftComponent />
            <BackgroundArea>
              <RightComponent />
            </BackgroundArea>
          </>
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
