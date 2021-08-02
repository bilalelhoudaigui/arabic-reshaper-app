import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from '@material-ui/core';

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

export default function AraAppBar(props) {
  const classes = useStyles();
  const { bgTheme, setBgTheme, icon } = props

  return (
    <div className={classes.root}>
      <AppBar position="static" dir="rtl" style={{ background: "#2E3B55" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href='/help' color="inherit" style={{ textDecoration: "none" }}>مساعدة</Link>
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            dir="rtl"
            onClick={() => setBgTheme(!bgTheme)}
          >
            {icon}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
