import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    logo: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
}));

export const arabicIntro = "Arabic Reshaper هو موقع يسمح بتحويل الكتابة العربية الى كتابة مفهومة من قبل اغلب برامج التصميم مثل Photoshop و After Effects و Premiere Pro و Avid Media Composer و برامج اخرى كثيرة"
export const englishIntro = "Arabic Reshaper is a website that allows you to convert arabic text to a format compatible with many softwares like PhotoShop, After Effects, Premiere Pro, Avid Media Composer etc.."

function Header() {
    const classes = useStyles()

    return (
        <div className={classes.logo}>
            <img className="Header-logo" src="logo.png" alt="Logo" height="100px" />
            <h1>Arabic Reshaper</h1>
            <Alert severity="info" dir="rtl">
                {arabicIntro}
            </Alert>
            <Alert severity="info">
                {englishIntro}
            </Alert>
        </div>
    )
}

export default Header
