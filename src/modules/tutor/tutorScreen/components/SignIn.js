import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

import learnEdtheme from '../../../../theme';


const SignIn = ()=>{
	const styles = {
		form :{
			backgroundColor: learnEdtheme.brandSecondry,
			borderRadius: '4px',
			padding: '20px 20px 40px',
			marginTop: '10%',
			marginLeft: '10%',
		},
		loginText:{
			color: '#fff',
			marginBottom: '20px'
		}
	} 
	return(
		<div>
			<form   style={styles.form}>
			  <div class="form-group">
				 <div style = {styles.loginText}><h3>Enter to the world of education enablers!</h3></div> 
			  </div>
				<div className="col-md-10 offset-md-1">
					<div class="form-group text-center">
				    {/* <button className="btn btn-primary px-5" style = {{background: 'rgb(26 75 128)'}} >Sign In with Google</button> */}
					</div>
					<div class="form-group text-center">
				    {/* <p className="lead text-muted" >Or</p> */}
					</div>
					<div class="form-group">
				    <input class="form-control" type="email" placeholder="Enter Email Id" />
					</div>
				  <div class="form-group">
				    <input class="form-control" type="password" placeholder="Enter Password"/>
				  </div>
				  <div>
				  <Button  variant="contained" color="white">
                            LOGIN
                        </Button> 

				  </div>
				</div>
			</form>
		</div>
		
	)
}

export default SignIn;