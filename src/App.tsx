import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import HangboardTimer from './hangboard-timer/HangboardTimer';
import TodoContainer from './todo/TodoContainer';
  
const theme = {
  breakpoints:    {
    phone: '@media (max-width: 599px)',
    tablet: '@media (min-width: 600px)',
    desktop: '@media (min-width: 1200px)'
  }
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <TodoContainer />
      </ThemeProvider>
    );
  }
}

export default App;
