import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';

import initialState from './state';

const ComingSoonScreen = ()=>{

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

    return(
        <div className="container" >

            <div className="container pt-3 text-center">
              <h1 className="bd-title" >LearnEd</h1>
              <p className="lead text-muted">
                  Live to Learn.
              </p>
        			<h3 className="display-4" >Coming Soon</h3>
              <p className="lead text-muted">{tutorInformation.email}</p>
              <p className="lead text-muted">{tutorInformation.description}</p>

            </div>

            <div className="container pt-4" >
            	<div className="row">
            		<div className="col-md-6 offset-md-3" >
            			<form>
									  <div className="form-group">
									    <label for="email">Email address</label>
									    <input type="email" className="form-control" name="email" id="email" value={tutorInformation.email}
									    aria-describedby="emailHelp" onChange={(e)=>setState(e.target)} required />
									    <small id="emailHelp" className="form-text text-muted">
									    We'll never share your email with anyone else.</small>
									  </div>
									  <div className="form-group">
									    <label for="description">A Short Description About Yourself</label>
									    <textarea className="form-control" id="description" name="description" value={tutorInformation.description}
									    rows="3" onChange={(e)=>setState(e.target)} required></textarea>
									  </div>
									  <button className="btn btn-primary text-center" onClick={(e)=>formSubmit(e)} >Submit</button>
									</form>
            		</div>
            	</div>
            </div>
        </div>

        )
}


export default ComingSoonScreen;