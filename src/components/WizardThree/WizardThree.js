import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {updateProperty} from '../../ducks/reducer';

class WizardThree extends Component {
	render(){
		const {updateProperty} = this.props;

		return(
			<div className="parent-div">
				<div className="vert-align">
					<p> What property are you looking to use the loan on? </p><br />
					<div className="row">
						<Link to="/wFour"><button value="primaryHome" onClick={ev => updateProperty(ev.target.value)}>Primary Home</button></Link>
						<Link to="/wFour"><button value="rentalProperty" onClick={ev => updateProperty(ev.target.value)}>Rental Property</button></Link>
						<Link to="/wFour"><button value="secondaryHome" onClick={ev => updateProperty(ev.target.value)}>Secondary Home</button></Link>
					</div>
				</div>           
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		propToBeUsedOn: state.propToBeUsedOn
	}
}

const mapDispatchToProps = {
	updateProperty: updateProperty
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardThree); 
