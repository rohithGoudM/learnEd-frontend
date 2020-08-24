import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';

import {TutorForm, CheckList, SignIn} from './components';

const TutorScreen = ()=>{
	return (
		<div className="container pt-3">
			<div className="container pt-3 text-center">
	            <h1 className="bd-title" >LearnEd</h1>
	            <p className="lead text-muted">
	                Live to Learn.
	            </p>
            </div>
			<div className="row">
				<div className="col-md-7">
					<CheckList />
			<p className="lead text-muted pt-3">Join the largest community of educators. Many of them are also contributing to
fulfill educational needs of the underprivileged. </p>
					<div className="col-md-5">
						<TutorForm />
					</div>
				</div>
				<div className="col-md-5">
					<SignIn />
				</div>
			</div>
		</div>
	)
}

export default TutorScreen;