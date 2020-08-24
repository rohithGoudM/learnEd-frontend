import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';


import learnEdtheme from '../../theme';
import './styles.css';
import LoginSection from './components/LoginSection';
import studentImage from '../../../public/student1.jpg';
import Features from './components/Features';
import BannerSection from '../tutor/components/BannerSection';
const StudentScreen = ()=>{
	return (
		<div >
			<div>
				<div className="section text-center" style={{ backgroundImage: 'url(' + studentImage + ')', backgroundSize: 'cover' }}>
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

export default StudentScreen;