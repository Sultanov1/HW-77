import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {store} from './app/store.ts';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {CssBaseline, ThemeProvider} from '@mui/material';
import theme from './theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <App/>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
