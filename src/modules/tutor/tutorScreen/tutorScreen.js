import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';

import {TutorForm, CheckList, SignIn} from './components';
import Header from '../../home/components/Header/Header';
import SubHeader from '../../home/components/Header/SubHeader';
import learnEdtheme from '../../../theme';
import './styles.css';
import LoginSection from './components/LoginSection';
import tutorImage from '../../../../public/tutor1.jpg';
import BannerSection from './components/BannerSection';
import Features from './components/Features';

const TutorScreen = ()=>{
	return (
		<div >
			<div>
				<div className="section text-center" style={{ backgroundImage: 'url(' + tutorImage + ')', backgroundSize: 'cover' }}>
					<div style={{ height: '100%', width: '100%', backgroundColor: 'rgb(251 230 229 / 59%)' }}>
						<BannerSection />
					</div>

				</div>
				<div style={{ height: '150px', backgroundColor: learnEdtheme.brandPrimary }}></div>
				<div className="container">
					<div className="section" style={{ backgroundColor: learnEdtheme.backgroundBase }}>
						<Features />
					</div>
				</div>
				<div className="row">
				</div>
			</div>
		</div>
	)
}

export default TutorScreen;