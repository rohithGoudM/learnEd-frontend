import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import comingSoonScreen from '../modules/comingSoon/comingSoonScreen';
import TutorScreen from '../modules/tutor/tutorScreen/index';
import HomeScreen from '../modules/home/HomeScreen';
import { createMuiTheme } from '@material-ui/core/styles';
import learnEdtheme from '../theme';
import { ThemeProvider } from '@material-ui/styles';

// import NotFound from '../modules/notFound/notFoundScreen';
// import  App from '../modules/App';
const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: learnEdtheme.brandPrimary,
    },
    secondary: {
      // This is green.A700 as hex.
      main: learnEdtheme.brandSecondry,
    },
  },
});
export default () => {
 return (
  <ThemeProvider theme={theme}>

   <BrowserRouter>
   <Switch>
   <Route path='/' component={HomeScreen}/>

   </Switch>
   </BrowserRouter>
   </ThemeProvider>

 )
}