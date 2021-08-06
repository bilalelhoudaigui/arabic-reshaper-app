import React, { useState } from "react";
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';

import { createTheme } from "@material-ui/core/styles";
// to get rid of 'findDOMNode is deprecated in StrictMode' error
// import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core/styles';

import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";

import Header from './Header';
import ArabicForm from './ArabicForm';

// Configure JSS for RTL
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import AraAppBar from "./AraAppBar";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export const light = {
  palette: {
    type: "light"
  },
  // for some reason, the font get overrided if I put it in the main appTheme
  typography: {
    fontFamily: [
      'Tajawal',
      'sans-serif',
    ].join(','),
  },
};

export const dark = {
  palette: {
    type: "dark"
  },
  // for some reason, the font get overrided if I put it in the main appTheme
  typography: {
    fontFamily: [
      'Tajawal',
      'sans-serif',
    ].join(','),
  },
};

function App() {
  const [bgTheme, setBgTheme] = useState(true);
  const icon = !bgTheme ? <Brightness7Icon /> : <Brightness3Icon />;

  const appTheme = createTheme(
    // toggle between light and dark theme
    bgTheme ? light : dark,
    // RTL support, font and TextArea config 
    {
      // Get a beautiful TextArea in Material UI: https://stackoverflow.com/a/64051350/4488332
      overrides: {
        MuiOutlinedInput: {
          multiline: {
            fontWeight: 'bold',
            fontSize: '20px'
          }
        }
      },
      // Right to left: https://v3.material-ui.com/guides/right-to-left/
      direction: 'rtl', // Both here and <body dir="rtl">
    });

  return (
    <ThemeProvider theme={appTheme}>
      <StylesProvider jss={jss}>
        <Container component="main" maxWidth="lg">
          <AraAppBar bgTheme={bgTheme} setBgTheme={setBgTheme} icon={icon} />
          <Header />
          <ArabicForm />
        </Container>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
