import React from "react";
import LeftComponent from "./LeftComponents/LeftComponent";
import RightComponent from "./RightComponents/RightComponent";
import { BackgroundArea } from "./styles";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";

function App() {
  const theme = createTheme(); // Create or use a default theme
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}> {/* Wrap your app in ThemeProvider */}
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
