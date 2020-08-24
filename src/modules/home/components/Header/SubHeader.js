import React from 'react';
import {connect} from 'react-redux';
import './styles.css';
import { Link } from 'react-router-dom';
export default class SubHeader extends React.Component{


render(){
        return (
            <div  style={styles.headerStyle} className = "row" >
                {this.props.routes.map(tab =>{
                    return(
                    <div onClick = {()=>this.props.changeRoute(tab.index)} className="col-md-2 row tabs" >
                       <div className={tab.index == this.props.activeRoute ? "subHeader_tab_active subHeader_tab tab" : "subHeader_tab tab"}>
                       <Link to={tab.route}>   {tab.title}</Link>
                        </div>
                    </div>)
                })}
                </div> 
        
        )
    }
}
    



const styles = {
    headerStyle :{ 
        justifyContent: 'center'
    },
    tabContainer:{
        justifyContent: 'center'
    }

}
