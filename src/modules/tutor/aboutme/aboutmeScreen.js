import React from 'react';
import StudentFeedback from './components/StudentFeedback';

const styles = {
	div:{
		border: '2px solid tomato'
	}
}

const AboutmeScreen = ()=>{

	const fetchit = ()=>{
		fetch('http://58f94fd47437.ngrok.io/get',{
	  		method:"get", 
			headers:{
				"Access-Control-Allow-Origin": "*",
				"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhaW51c2UiLCJleHAiOjE1OTg0Mzg1NzEsImlhdCI6MTU5ODQyMDU3MX0.KWYLOyPOrGBr_CySoWUl4RJ4ah5mu1JojGmcfHyudpRCZ-NsfMkad6FywLlmDysSBFP7vIDrPYAUviwbricqvg",
				"Content-Type": "application/json"
			}
	    }).then(result=>{      
	      	console.log(result);
	    });
	}

	const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	return(
		<div className="container pt-5" style={{ backgroundColor:'' }}>
			<div className="row">
				<div className="col-md-3">
					<img src="/flower.jpg" width="100%" />
				</div>
				<div className="col-md-8">
					<p className="">{lorem}</p>
					<p className="">{lorem}</p>
				</div>
			</div>
			<StudentFeedback />
		</div>
	)
}

export default AboutmeScreen;