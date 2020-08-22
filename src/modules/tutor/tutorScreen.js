import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';

import {TutorForm, CheckList, SignIn} from './components';
import Header from '../../ui-components/Header';
import SubHeader from '../home/components/SubHeader';
import learnEdtheme from '../../theme';
import './styles.css';
import LoginSection from './components/LoginSection';
import tutorImage from '../../../public/tutor1.jpg';
import SignUpSection from './components/SignUpSection';
const TutorScreen = ()=>{
	return (
		<div >
		{/* // 	<Header/>
		// 	<SubHeader/> */}
		<div>
			<div className="section text-center"  style = {{backgroundImage: 'url('+tutorImage+')', backgroundSize: 'cover'}}>
				<div style = {{height:'100%', width: '100%', backgroundColor:'rgb(251 230 229 / 59%)'}}>
	            <LoginSection/>
				</div>
				<div className="section" style = {{backgroundColor:learnEdtheme.backgroundBase}}>
				<SignUpSection/>
				</div>
            </div>
			<div className="row">
				{/* <div className="col-md-7">
					<CheckList />
			<p className="lead text-muted pt-3">Join the largest community of educators. Many of them are also contributing to
					fulfill educational needs of the underprivileged. </p>
					<div className="col-md-5">
						<TutorForm />
					</div>
				</div>
				<div className="col-md-5">
					<SignIn />
				</div> */}
			</div>
		</div>
		</div>
	)
}

export default TutorScreen;