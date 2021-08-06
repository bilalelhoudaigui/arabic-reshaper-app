import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';

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

export default function AraTopBar(props) {
  const classes = useStyles();

  const { bgTheme, setBgTheme, icon } = props

  return (
    <div className={classes.root}>
      <AppBar position="static" dir="rtl" style={{ background: "#2E3B55" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit" href="/">الصفحة الرئيسية</Button>
            <Button color="inherit" href="/how-it-works">للفضوليين</Button>
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={() => setBgTheme(!bgTheme)}
          >
            {icon}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
