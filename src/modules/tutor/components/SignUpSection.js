import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';


import learnEdtheme from '../../../theme';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import SignIn from './SignIn';
import CheckList from './CheckList';
import TutorForm from './TutorForm';
 


export default class SignUpSection  extends React.Component{
    state = {
        activeRouteIndex:1
    }

    render(){
     
	return (
        <div className="row">
		<div className="col-md-7">
					<CheckList />
			<p className="lead text-muted pt-3">Join the largest community of educators. Many of them are also contributing to
					fulfill educational needs of the underprivileged. </p>
                    </div>

					<div className="col-md-5">
						{/* <TutorForm/> */}
					</div>
				</div>
    )
    }
}

