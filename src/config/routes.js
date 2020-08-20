import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import comingSoonScreen from '../modules/comingSoon/comingSoonScreen';
// import NotFound from '../modules/notFound/notFoundScreen';
// import  App from '../modules/App';
export default () => {
 return (
   <BrowserRouter>
   <Switch>
   <Route exact path='/' component={comingSoonScreen}/>
   </Switch>
   </BrowserRouter>
 )
}