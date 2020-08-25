import React from 'react';

const styles = {
	div:{
		border: '2px solid tomato'
	}
}

const AboutmeScreen = ()=>{

	const fetchit = ()=>{
		fetch('http://aed8f646436c.ngrok.io/get',{
	  		method:"get",
			headers:{
				"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE1OTgzNTk0MjAsImlhdCI6MTU5ODM0MTQyMH0.0dVSY27K7EAfOLeWb0ky5vK41xeppIeMTMhdA3j1EV_2eQIQYX43a8cEbvsygeu2jHGgOWAhnkNGaLnAO_b7Fw",
				"Content-Type": "application/json"
			}
	    }).then(result=>{      
	      	console.log(result);
	    });
	}

	return(
		<div style={styles.div} onClick={()=> fetchit()}>
			Request test
		</div>
	)
}

export default AboutmeScreen;