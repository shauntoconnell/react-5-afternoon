import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {updateAgent} from '../../ducks/reducer';

class WizardFive extends Component {

	render() {
		const {updateAgent} = this.props;

		return (
			<div className="parent-div">
				<div className="vert-align">    
					<p>Are you currently working with a real estate agent?</p> <br />

					<div className="row">
						<Link to="/wSix"><button onClick={() => updateAgent('true')}>Yes</button></Link>
						<Link to="/wSix"><button onClick={() => updateAgent('false')}>No </button></Link>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		realEstateAgent: state.realEstateAgent
	};
}

const mapDispatchToProps = {
	updateAgent: updateAgent
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardFive);