import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import HangboardTimer from './misc/containers/HangboardTimer/HangboardTimer';
  
const theme = {
  breakpoints: {
    phone: '@media (max-width: 599px)',
    tablet: '@media (min-width: 600px)',
    desktop: '@media (min-width: 1200px)'
  }
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <HangboardTimer />
      </ThemeProvider>
    );
  }
}

export default App;
