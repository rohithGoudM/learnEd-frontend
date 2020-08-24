import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import learnEdtheme from '../../../theme';

import initialState from '../state';
const styles = {form :{
	backgroundColor: learnEdtheme.brandSecondry,
	borderRadius: '4px',
	padding: '20px 40px 40px 40px',
	margin: '10%',
	marginTop: '70px',

	
},
loginText:{
	color: '#fff',
	marginBottom: '40px'
}
}
const TutorForm = ()=>{

	const [tutorInformation, setTutorInformation] = useState(initialState);

  const setState = (target)=>{
  	setTutorInformation({...tutorInformation, [target.name]:target.value });
  }

  const formSubmit = (event)=>{
  	if(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(tutorInformation.email) 
  		&& tutorInformation.description){
  		event.preventDefault();  	
	  	fetch('http://13.126.158.81:8080/postDetail',{
	      method:"post",
	      headers:{
	        "Content-Type": "application/json"
	      },
	      body:tutorInformation
	    }).then(result=>{      
	      console.log(result);
	  		setTutorInformation(initialState);
	    });
	  		// setTutorInformation(initialState);
  	}
  }

	return (
		<form className="" style={styles.form}>
		  <div className="form-group">
		  <div style = {styles.loginText}><h3>Enter to the world of education enablers!</h3></div> 

		    <input type="email" className="form-control" name="email" id="email" 
		    value={tutorInformation.email} placeholder="Email address"
		    aria-describedby="emailHelp" onChange={(e)=>setState(e.target)} required />
		    <small id="emailHelp" className="form-text text-muted">
		    We'll never share your email with anyone else.</small>
		  </div>
		  <div className="form-group">
		    <textarea className="form-control" id="description" placeholder="A Short Description About Yourself"
		    name="description" value={tutorInformation.description}
		    rows="3" onChange={(e)=>setState(e.target)} required></textarea>
		  </div>
		  <button className="btn btn-primary text-center" style = {{backgroundColor:'white', border:learnEdtheme.brandSecondry, color: learnEdtheme.brandSecondry}} onClick={(e)=>formSubmit(e)} >Register</button>
		</form>
	)
}

export default TutorForm;