import React from 'react';
import { useEffect, useState, useRef } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import { TextField, InputAdornment, Button } from "@material-ui/core";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

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

// TODO: Read more about Ref and how it works (https://stackoverflow.com/a/63559549/4488332)
const CopyToClipText = ({ text }) => {
    const myRef = useRef(null);
    const [data, setData] = useState(text);
    useEffect(() => setData(text), [text]);

    useEffect(() => {
        if (myRef.current && data) {
            myRef.current.select();
            document.execCommand('copy');
            setData(null);
        }
    }, [data, myRef.current]);

    return <div>{data && <textarea ref={myRef}>{data}</textarea>}</div>;
};

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ArabicForm() {
    const classes = useStyles()

    const [originalText, setOriginalText] = useState('')
    const [reshapedText, setReshapedText] = useState('')

    const [copyText, setCopyText] = useState('')
    const [copySuccess, setCopySuccess] = useState(false)

    const [open, setOpen] = useState(false);

    const handleCopyClick = () => () => {
        setCopyText(reshapedText)
        setCopySuccess(true)
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleValueChange = () => {
        const transformedText = reshaper.ArabicShaper.convertArabic(originalText)
        // for some reason, transformedText doesn't show up properly on Davinci Resolve 17
        // so I neede to reverse the string
        setReshapedText([...transformedText].reverse().join(''))
    }

    useEffect(() => {
        // useEffect is needed sice setState is asynchronous: https://stackoverflow.com/a/65807556/4488332
        handleValueChange()
        originalText ? setCopySuccess(false) : setCopySuccess(true)
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
                    {reshapedText && <span>قم بنسخ النص أسفله</span>}
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
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button disabled={copySuccess} >
                                    <FileCopyIcon onClick={handleCopyClick()} />
                                </Button>
                            </InputAdornment>
                        )
                    }}
                />
                <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        تم نسخ النص بنجاح!
                    </Alert>
                </Snackbar>
            </div>
            <CopyToClipText text={copyText} />
        </>
    );
}
