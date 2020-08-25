import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';


import learnEdtheme from '../../../../theme';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import SignIn from './SignIn';
import TutorForm from './TutorForm';
 import '../styles.css';
 import Paper from '@material-ui/core/Paper';
import aboutME from '../../../../../public/aboutMe.png';

export default class Features extends React.Component{
    state = {
        activeRouteIndex:1
    }

    render(){
     
	return (
        <div className=" pt-3">
            <div className="">
                <div className="row">
                    <div className="col-md-6">
                        <div >
                            <Paper className="paperFeature">
                                <h2>Create your customized portfolio</h2>
                                <p>
                                Create your own website with your customized details.Which  can be shared as a public page.
                                The URL will be your own .And will also contain the feedback from your students and other details
                                </p></Paper>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div style={{ height: '500px', margin: '5%', justifyContent: 'center', paddingTop: '50px' }}>
                            <img src={aboutME} style={{
                                height: '400px',
                                width: '450px'
                            }}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

