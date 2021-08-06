import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    logo: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export const arabicIntro = "Arabic Reshaper هو موقع يسمح بتحويل الكتابة العربية الى كتابة مفهومة من قبل اغلب برامج التصميم مثل Photoshop و After Effects و Premiere Pro و Avid Media Composer و برامج اخرى كثيرة"
export const englishIntro = "Arabic Reshaper is a website that allows you to convert arabic text to a format compatible with many softwares like PhotoShop, After Effects, Premiere Pro, Avid Media Composer etc.."

function AraHeader() {
    const classes = useStyles()

    return (
        <div className={classes.logo}>
            {/* 
            TODO: find a way to display images from public folder
            <img src={window.location.origin + "images/logo.png"} alt="Logo" height="100px" /> 
            */}
            <h1>(إعادة تشكيل كلمات اللغة العربية) Arabic Reshaper </h1>
            <Alert severity="info">
                {arabicIntro}
            </Alert>
            <Alert severity="info" dir="ltr">
                {englishIntro}
            </Alert>
        </div>
    )
}

export default AraHeader
