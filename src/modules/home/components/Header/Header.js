import React from 'react';
import {connect} from 'react-redux';
import learnEdtheme from '../../../../theme';
import SubHeader from './SubHeader';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import { roles } from '../../../../config/constants';

const styles = {
    headerStyle :{
    backgroundColor:learnEdtheme.brandHeader,
    height: '80px',
    padding: "0px 20px"
    },
    title: {
        color: '#efefef',
        lineHeight: '80px',
        marginLeft: '20px',
        color: learnEdtheme.brandPrimary
    },
    subTitle: {
        color:'#efefef',
        lineHeight: '30px',
    marginLeft: '10px',
    fontWeight: 400,
    fontSize: '15px',
    }
}

const Header = (props)=>{
	return (
        
        <div  style={styles.headerStyle}>
            <div className="row">
                <div className="col-md-2 ">
                    <div >
                        <h1 className="title" style={styles.title} >LearnEd</h1>

                    </div>

                </div>
                <div className="col-md-6" style = {{height: '40px',marginTop: '40px'}}>
                    <SubHeader activeRoute={props.activeRoute} changeRoute={props.changeRoute} routes={props.routes} />
                </div>
                <div className="col-md-4  row" style={{ justifyContent: 'center', lineHeight:'50px' }}>
                    <div style={{ marginRight: "50px" , marginTop : '30px'}}> 
                        <Button variant="contained" color="primary">
                            LOGIN
                        </Button>  
                    </div>
                    <div>
                        <div>
                   <span onClick={()=>props.changeRole(roles.tutor)}>
                       <Link to ='/tutor'>  Tutor Portal  </Link>
                    </span> 
                   <Switch checked = {props.activeRole == roles.student} 
                //    onChange={() => props.changeRole(props.activeRole == roles.student ? roles.tutor : roles.student)}
                   />
                    <span onClick={()=>props.changeRole(roles.student)}>
                        <Link to ='/student'> Student Portal</Link> 
                    </span>
                    </div>
                    </div>
                </div>
            </div>
        </div>

	)
}

export default Header;
