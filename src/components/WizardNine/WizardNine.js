import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {updateAddressOne, updateAddressTwo, updateAddressThree} from '../../ducks/reducer';

class WizardNine extends Component {

	render() {
		const {updateAddressOne, updateAddressTwo, updateAddressThree} = this.props;

		return (
			<div className="parent-div">
				<div className="vert-align">                    
					
					<p>What is your address?</p> <br />

					<input type="text" placeholder="Line One" onChange={ev => updateAddressOne(ev.target.value)}/>
					<input type="text" placeholder="Line Two" onChange={ev => updateAddressTwo(ev.target.value)}/>
					<input type="text" placeholder="Line Three" onChange={ev => updateAddressThree(ev.target.value)}/>
				
					
					<Link to="/wTen"><button className="margin-btn"> Next </button></Link>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		addressOne: state.addressOne,
		addressTwo: state.addressTwo,
		addressThree: state.addressThree
	};
}

const mapDispatchToProps = {
	updateAddressOne: updateAddressOne,
	updateAddressTwo: updateAddressTwo,
	updateAddressThree: updateAddressThree
}

export default connect(mapStateToProps, mapDispatchToProps)(WizardNine);