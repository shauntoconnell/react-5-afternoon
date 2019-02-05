import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {updateFound} from '../../ducks/reducer';

class WizardFour extends Component {
	render(){
		const {updateFound} = this.props;
		return(
			<div className="parent-div">
				<div className="vert-align">            
					<p>Have you already found your new home?</p> <br />
					
					<div className="row">
						<Link to="/wFive"><button onClick={() => updateFound(true)}>Yes</button></Link>
						<Link to="/wFive"><button onClick={() => updateFound(false)}>No </button></Link>  
					</div>         
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		found: state.found
	};
}

const mapDispatchToProps = {
	updateFound: updateFound
};

export default connect(mapStateToProps, mapDispatchToProps)(WizardFour);