import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/Global.styled';
import Page from './components/Page';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Page />
    </ThemeProvider>
  );
}

export default App;
