import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { defaultTheme } from '@/styles/themes/default';
import { GlobalStyle } from '@/styles/global';

import { Router } from '@/routes';

import { PostContextProvider } from '@/context/posts';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PostContextProvider>
          <Router />
        </PostContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
