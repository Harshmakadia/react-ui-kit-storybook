import React from 'react';
import Alert from './components/Alert';
import ThemeProvider from './components/ThemeProvider';
import { defaultTheme } from './themes';

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Alert title="Hello" type="info" />
      </div>
    </ThemeProvider>
  );
}

export default App;
