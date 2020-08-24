import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';


import learnEdtheme from '../../../theme';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import SignIn from './SignIn';
import TutorForm from './TutorForm';
 


export default class LoginSection extends React.Component{
    state = {
        activeRouteIndex:1
    }

    render(){
     
	return (
		<div className=" pt-3">
			<div className="">
                <div className = "row">
                    <div className="col-md-7">

                    </div>
                    <div className="col-md-5">
                    <TutorForm/>

                    </div>
                </div>
            </div>
		</div>
    )
    }
}

