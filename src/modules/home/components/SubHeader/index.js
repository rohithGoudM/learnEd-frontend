import React from 'react';
import {connect} from 'react-redux';
import './styles.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import tutorScreen from '../../../tutor/tutorScreen';

 import Tabs from '@material-ui/core/Tabs'
 import Tab from '@material-ui/core/Tab';
import learnEdtheme from '../../../../theme';
export default class SubHeader extends React.Component{


render(){
        return (
            <div  style={styles.headerStyle} className = "row" >
                {this.props.routes.map(tab =>{
                    return(
                    <div onClick = {()=>this.props.changeRoute(tab.index)} className="col-md-2 row tabs" >
                       <div className={tab.index == this.props.activeRoute ? "subHeader_tab_active subHeader_tab tab" : "subHeader_tab tab"}>
                       <Link to="/tutor">   {tab.title}</Link>
                        </div>
                    </div>)
                })}

                {/* <div className="col-md-2 row tabs" >
                    <div className={true? "subHeader_tab_active subHeader_tab tab": "subHeader_tab tab"}>
                    Tutor
                    </div>
                </div>
                <div className="col-md-2 row">
                <div className="subHeader_tab tab">
                    Student
                    </div>
    
                </div>
                <div className="col-md-2 row">
                <div className="subHeader_tab">
                    Homeschooling
                    </div>
    
                </div>
                <div className="col-md-2 row">
                <div className="subHeader_tab">
                    Newsfeed
                    </div>
    
                </div>
                <div className="col-md-2 row">
                <div className="subHeader_tab">
                    Testimonials
                    </div>
    
                </div>
                <div className="col-md-2 row">
                <div className="subHeader_tab">
                    About us
                    </div>
    
            </div>*/}
                </div> 
        
        )
    }
}
    



const styles = {
    headerStyle :{
    // backgroundColor:learnEdtheme.brandPrimary,
    backgroundImage: "linear-gradient(to bottom, #c61b2e, #f2a4a0)",
    height: 60,
    justifyContent: 'center'

    
    },
    tabContainer:{
        justifyContent: 'center'
    }

}
