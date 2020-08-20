import React, {Component} from 'react';
import {connect} from 'react-redux';

const ComingSoonScreen = ()=>{

    return(
        <div className="container" >

            <div className="container pt-3 text-center">
                <h1 className="bd-title" >LearnEd</h1>
                <p className="lead text-muted">
                    Live to Learn.
                </p>
          			<h3 className="display-4" >Coming Soon</h3>
            </div>

            <div className="container pt-4" >
            	<div className="row">
            		<div className="col-md-6 offset-md-3" >
            			<form method="get" action="#">
									  <div className="form-group">
									    <label for="email">Email address</label>
									    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" required />
									    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
									  </div>
									  <div className="form-group">
									    <label for="description">A Short Description About Yourself</label>
									    <textarea className="form-control" id="description" name="description" rows="3"></textarea>
									  </div>
									  <button type="submit" className="btn btn-primary text-center">Submit</button>
									</form>
            		</div>
            	</div>
            </div>
        </div>

        )
}


export default ComingSoonScreen;