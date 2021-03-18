import React, { Component } from 'react';
import Header from './components/Header';
import { Container } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: {
          main: '#ec407a',
        },
      },
})

const App = () => {
    return (
        <ThemeProvider theme = {theme}>
            <Container>
                <Header />
            </Container>
        </ThemeProvider>
    );
}

export default App;