import React, {useState,useEffect} from 'react';
import {connect} from 'react-redux';



const CheckList = ()=>{
	const array = [
	"Customize your own Web Page",
	"Increase your online presence",
	"Increase number of students from different parts of country",
	"Manage your schedule and batches",
	"Manage your assignments and Tests",
	"Track student’s progress and provide regular feedback",
	"Track all your payments"
	];

	let checks = array.map((t,i)=>{
			return(
				<div class="form-check">
				  <input class="form-check-input" checked type="checkbox" value="" id="defaultCheck1"/>
				  <label class="form-check-label" for="defaultCheck1">
				    {t}
				  </label>
				</div>
			)
		});
	return(
		<div>
			{checks}
		</div>
		
	)
}

export default CheckList;