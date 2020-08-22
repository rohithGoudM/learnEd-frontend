import React from 'react';
import {connect} from 'react-redux';
import learnEdtheme from '../theme';
const styles = {
    headerStyle :{
    backgroundColor:learnEdtheme.brandPrimary,
    height: 80,
    },
    title: {
        color: '#efefef',
        lineHeight: '80px',
        marginLeft: '20px'
    },
    subTitle: {
        color:'#efefef',
        lineHeight: '80px',
    marginLeft: '10px',
    fontWeight: 400,
    fontSize: '15px',
    }
}

const Header = ()=>{
	return (
        <div className="row" style={styles.headerStyle}>
            <div className="col-md-7 row">
                <div >
                    <h1 className="title" style = {styles.title} >LearnEd</h1>

                </div>
                <div className="col">
                    <p className="lead" style = {styles.subTitle}>
                        Live to Learn.
	                </p>
                </div>
            </div>
            <div className="col-md-5">

            </div>

        </div>
	
	)
}

export default Header;
