import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Dark theme
const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#26292C',
            light: 'rgb(81, 91, 95)',
            dark: 'rgb(26, 35, 39)',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#FFB74D',
            light: 'rgb(255, 197, 112)',
            dark: 'rgb(200, 147, 89)',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        titleBar: {
            main: '#555555',
            contrastText: '#ffffff',
        },
        error: {
            main: red.A400,
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
