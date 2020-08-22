import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';

// import {TutorForm, CheckList, SignIn} from './components';
import Header from '../../ui-components/Header';
import SubHeader from './components/SubHeader';
import learnEdtheme from '../../theme';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import unauth_header_routes from './components/SubHeader/headerRoutes';
import TutorScreen from '../tutor/tutorScreen';
 
export default class HomeScreen extends React.Component{
    state = {
        activeRouteIndex:1
    }
      
changeRoute =(value)=>{
    this.setState({activeRoute:value});
}
    render(){
       var  activeRoute = unauth_header_routes[this.state.activeRouteIndex]
	return (
		<div className="container pt-3" style = {{backgroundColor:learnEdtheme.backgroundBase}}>
			<Header/>
			<SubHeader activeRoute = {this.state.activeRouteIndex} changeRoute = {this.changeRoute} routes = {unauth_header_routes} />
    <Route  path={'/tutor'} component={TutorScreen}/> 
    {/* <TutorScreen/> */}
		</div>
    )
    }
}

