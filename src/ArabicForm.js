import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormatTextdirectionRToLIcon from '@material-ui/icons/FormatTextdirectionRToL';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import reshaper from 'arabic-persian-reshaper'

import Theme from './theme'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
}));


export default function ArabicForm() {
    const classes = useStyles()

    const [originalText, setOriginalText] = useState('')
    const [reshapedText, setReshapedText] = useState('')

    const handleValueChange = () => {
        const transformedText = reshaper.ArabicShaper.convertArabic(originalText)
        // for some reason, transformedText doesn't show up properly on Davinci Resolve 17
        // so I neede to reverse the string
        setReshapedText([...transformedText].reverse().join(''))
    }

    useEffect(() => {
        // useEffect is needed sice setState is asynchronous: https://stackoverflow.com/a/65807556/4488332
        handleValueChange()
    }, [originalText])

    return (
        <ThemeProvider theme={Theme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <div dir="rtl" className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <FormatTextdirectionRToLIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Arabic Reshaper
                    </Typography>
                    <h2>النص الأصلي</h2>
                    <TextField
                        id="outlined-multiline-static-original"
                        name="originalText"
                        margin="normal"
                        // label="النص الأصلي"
                        placeholder="أدخل النص هنا"
                        multiline
                        rows={10}
                        variant="outlined"
                        onChange={e => setOriginalText(e.target.value)}
                        value={originalText}
                        required
                        autoFocus
                    />
                    <h2>النص المعدل</h2>
                    <TextField
                        id="outlined-multiline-static-reshaped"
                        name="reshapedText"
                        margin="normal"
                        // label="النص المعدل"
                        multiline
                        rows={10}
                        variant="outlined"
                        value={reshapedText}
                    />
                </div>
            </Container>
        </ThemeProvider>
    );
}
