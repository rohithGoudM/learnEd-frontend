import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import comingSoonScreen from '../modules/comingSoon/comingSoonScreen';
import tutorScreen from '../modules/tutor/tutorScreen';
import HomeScreen from '../modules/home/HomeScreen';
// import NotFound from '../modules/notFound/notFoundScreen';
// import  App from '../modules/App';
export default () => {
 return (
   <BrowserRouter>
   <Switch>
   <Route path='/' component={HomeScreen}/>

   </Switch>
   </BrowserRouter>
 )
}