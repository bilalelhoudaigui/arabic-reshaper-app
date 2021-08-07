import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Normal or default theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#cc4444',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#f5f5f5',
        },
        titleBar: {
            main: '#eeeeee',
            contrastText: '#222222',
        },
    },
    // Get a beautiful TextArea in Material UI: https://stackoverflow.com/a/64051350/4488332
    overrides: {
        MuiOutlinedInput: {
            multiline: {
                fontWeight: 'bold',
                fontSize: '20px'
            }
        }
    },
    // Right to left: https://v3.material-ui.com/guides/right-to-left/
    direction: 'rtl', // Both here and <body dir="rtl">
    // Font
    typography: {
        fontFamily: [
            'Tajawal',
            'sans-serif',
        ].join(','),
    },
})

export default theme