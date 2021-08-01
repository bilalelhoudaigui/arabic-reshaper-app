import React from 'react';
import { TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

import reshaper from 'arabic-persian-reshaper'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
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
        <>
            <CssBaseline />
            <div dir="rtl" className={classes.paper}>
                {/* <h2>النص الأصلي</h2> */}
                <TextField
                    id="outlined-multiline-static-original"
                    name="originalText"
                    margin="normal"
                    label="النص الأصلي"
                    placeholder="أدخل النص هنا"
                    multiline
                    rows={5}
                    fullWidth
                    variant="outlined"
                    onChange={e => setOriginalText(e.target.value)}
                    value={originalText}
                    required
                    autoFocus
                />
                <h2>
                    { reshapedText && <span>قم بنسخ النص أسفله</span>}
                </h2>
                <TextField
                    id="outlined-multiline-static-reshaped"
                    name="reshapedText"
                    margin="normal"
                    label="النص المعدل"
                    dir="rtl"
                    multiline
                    rows={5}
                    fullWidth
                    variant="outlined"
                    value={reshapedText}
                />
            </div>
        </>
    );
}
