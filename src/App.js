import React, { useState } from "react";
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';

import { createTheme } from "@material-ui/core/styles";
// to get rid of 'findDOMNode is deprecated in StrictMode' error
// import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core/styles';

import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";

// Configure JSS for RTL
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import Layout from "./Layout";
import AraRoutes from "./AraRoutes";
import CustomThemeProvider from './themes/CustomThemeProvider';


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App(props) {
  const [bgTheme, setBgTheme] = useState(true);
  const icon = !bgTheme ? <Brightness7Icon /> : <Brightness3Icon />;



  return (
    <CustomThemeProvider>
      <StylesProvider jss={jss}>
        <Container component="main" maxWidth="lg">
          <Layout {...props}>
            <AraRoutes />
          </Layout>
        </Container>
      </StylesProvider>
    </CustomThemeProvider>
  );
}

export default App;
