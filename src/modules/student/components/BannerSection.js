import React, {useState,useEffect} from 'react';
import TutorForm from './TutorForm';
 


export default class BannerSection extends React.Component{
    state = {
        activeRouteIndex:1
    }

    render(){
     
	return (
		<div className=" pt-3">
			<div className="">
                <div className = "row">
                    <div className="col-md-7">

                    </div>
                    <div className="col-md-5">
                    <TutorForm/>

                    </div>
                </div>
            </div>
		</div>
    )
    }
}


