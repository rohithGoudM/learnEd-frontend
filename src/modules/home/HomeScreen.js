import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';

// import {TutorForm, CheckList, SignIn} from './components';
import Header from './components/Header/Header';
import SubHeader from './components/Header/SubHeader';
import learnEdtheme from '../../theme';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {unauth_header_routes_student, unauth_header_routes_teacher} from './components/Header/headerRoutes';
import TutorScreen from '../tutor/tutorScreen';
import StudentScreen from '../student/studentScreen';
import { roles } from '../../config/constants';
 
export default class HomeScreen extends React.Component{
    state = {
        activeRouteIndex:1,
        activeRole: 1
    }
      
changeRoute =(value)=>{
    this.setState({activeRoute:value});
}
changeRole=(value)=>{
    this.setState({activeRole:value});

}
    render(){
        var routes = this.state.activeRole == roles.student ? unauth_header_routes_student : unauth_header_routes_teacher
        return (
            <div className="" style={{ backgroundColor: learnEdtheme.backgroundBase }}>
                <Header activeRoute={this.state.activeRouteIndex} changeRoute={this.changeRoute} routes={routes} activeRole={this.state.activeRole}
                    changeRole={this.changeRole} />
                <Route path={'/tutor'} component={TutorScreen} />
                <Route path={'/student'} component={StudentScreen} />
            </div>
    )
    }
}

