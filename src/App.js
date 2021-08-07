import React from "react";
import Container from '@material-ui/core/Container';

// Configure JSS for RTL
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import Layout from "./Layout";
import AraRoutes from "./AraRoutes";
import CustomThemeProvider from './themes/CustomThemeProvider';


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App(props) {
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
