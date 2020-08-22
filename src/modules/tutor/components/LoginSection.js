import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';


import learnEdtheme from '../../../theme';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import SignIn from './SignIn';
 


export default class LoginSection extends React.Component{
    state = {
        activeRouteIndex:1
    }

    render(){
     
	return (
		<div className="container pt-3">
			<div className="">
                <div className = "row">
                    <div className="col-md-5">
                    <SignIn/>
                    </div>
                    <div className="col-md-7">
                       <h1 style = {{marginTop: '20%', color: 'black'}}>Education is the route to betterment of mankind !</h1>
                    </div>
                </div>
            </div>
		</div>
    )
    }
}

