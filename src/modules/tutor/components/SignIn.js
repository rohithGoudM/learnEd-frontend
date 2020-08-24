import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';



const SignIn = ()=>{
	return(
		<div>
			<form className="my-auto p-3">
			  <div class="form-group">
			    <input disabled type="email" class="form-control" id="exampleFormControlInput1" placeholder="Education is the route to betterment of mankind."/>
			  </div>
				<div className="col-md-10 offset-md-1">
					<div class="form-group text-center">
				    <button className="btn btn-primary px-5" >Sign In with Google</button>
					</div>
					<div class="form-group text-center">
				    <p className="lead text-muted" >Or</p>
					</div>
					<div class="form-group">
				    <input class="form-control" type="email" placeholder="Enter Email Id" />
					</div>
				  <div class="form-group">
				    <input class="form-control" type="password" placeholder="Enter Password"/>
				  </div>
				</div>
			</form>
		</div>
		
	)
}

export default SignIn;