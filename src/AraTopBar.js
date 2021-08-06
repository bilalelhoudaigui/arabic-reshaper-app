import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';

import FormControlLabel from '@material-ui/core/FormControlLabel'
import SwitchUI from '@material-ui/core/Switch'
import { CustomThemeContext } from './themes/CustomThemeProvider'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: "20px",
    textDecoration: "none",
  },
}));

export default function AraTopBar() {
  const classes = useStyles();

  const { currentTheme, setTheme } = useContext(CustomThemeContext)
  const isDark = Boolean(currentTheme === 'dark')

  const themeText = !isDark ? 'نهار' : 'ليل';

  const handleThemeChange = (event) => {
    const { checked } = event.target
    if (checked) {
      setTheme('dark')
    } else {
      setTheme('normal')
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" dir="rtl" style={{ background: "#2E3B55" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit" href="/">الصفحة الرئيسية</Button>
            <Button color="inherit" href="/how-it-works">للفضوليين</Button>
          </Typography>
          <FormControlLabel
            control={<SwitchUI checked={isDark} onChange={handleThemeChange} />}
            label={themeText}
          />
        </Toolbar>
      </AppBar>
    </div >
  );
}
