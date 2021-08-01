
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
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
    typography: {
        fontFamily: [
          'Tajawal',
          'sans-serif',
        ].join(','),
      },
});

export default theme;
