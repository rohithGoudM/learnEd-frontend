import React from 'react';
import {connect} from 'react-redux';
import learnEdtheme from '../../../../theme';
import SubHeader from './SubHeader';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

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
            {/* <div className="row" style={{ height: 30, justifyContent:'flex-end',    lineHeight: '37px',marginRight: '20px' }}> */}

            {/* </div> */}
            <div className="row">
                <div className="col-md-2 ">
                    <div >
                        <h1 className="title" style={styles.title} >LearnEd</h1>

                    </div>

                </div>
                <div className="col-md-7" style = {{height: '40px',marginTop: '40px'}}>
                    <SubHeader activeRoute={props.activeRoute} changeRoute={props.changeRoute} routes={props.routes} />
                </div>
                <div className="col-md-3  row" style={{ justifyContent: 'center', lineHeight:'50px' }}>
                    <div style={{ marginRight: "40px" }}> 
                        <Button variant="contained" color="primary">
                            LOGIN
                        </Button>  
                    </div>
                    <div>
                    Tutor  
                    <Switch
                        checked={true}
                        name="checkedA"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    Student
                    </div>
                </div>
            </div>
        </div>

	)
}

export default Header;
