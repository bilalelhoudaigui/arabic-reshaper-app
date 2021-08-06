import React from 'react';
import AraTopBar from "./AraTopBar"
import Footer from "./Footer"
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from "@material-ui/core/Box";


function Layout(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <AraTopBar />
            <div dir="rtl">
                {props.children}
            </div>
            <Box mt={8}>
                <Footer />
            </Box>
        </React.Fragment>
    )
}

export default Layout