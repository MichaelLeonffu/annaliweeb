import React from "react";
  
// We use Route in order to define the different routes of our application
import { Route, Routes, useRouteMatch} from "react-router-dom";

// We import all the components we need in our app
import AppBar from "./components/appbar.tsx";
// import ArtCard from "./components/artcard.tsx";
import ArtView from "./components/artview.tsx";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

// Making themes
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=FFB74D&secondary.color=81D4FA
// https://www.welcomedeveloper.com/react-mui-theme

const appTheme = createTheme({
  palette: {
    primary: {
      light: '#ffe97d',
      main: '#ffb74d',
      dark: '#c88719',
      contrastText: '#000',
    },
    secondary: {
      light: '#b6ffff',
      main: '#81d4fa',
      dark: '#4ba3c7',
      contrastText: '#000',
    },
  },
});

const App = () => {

  // Makes the background gray
  document.body.style = 'background: rgb(250, 250, 250)';

  // let match = useRouteMatch();

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <div className="App">

        <AppBar />
        <Container maxWidth="md">
          <Routes>
            <Route exact path="/" element={<ArtView tag=""/>} />
            <Route path="/:tag" element={<ArtView />} />
            <Route element={<p>404</p>} />
          </Routes>
          {/* <Button variant="contained">Hello World</Button> */}
        </Container>

      </div>
    </ThemeProvider>
      // <div>
      //   <div style={{backgroundColor: 'rgb(250, 250, 250)'}}>
      //       <AppBar />

      //       <main class="mdc-top-app-bar--fixed-adjust">
      //         App content
      //       </main>
      //   </div>
      // </div>
  );
};




export default App;


