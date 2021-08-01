import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import Header from './Header';
import ArabicForm from './ArabicForm';
import Theme from './theme';

import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <StylesProvider jss={jss}>
        <Container component="main" maxWidth="lg">
          <Header />
          <ArabicForm />
        </Container>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
