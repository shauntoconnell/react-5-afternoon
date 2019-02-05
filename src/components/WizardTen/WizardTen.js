import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import {updateFirst, updateLast, updateEmail} from '../../ducks/reducer';

class WizardTen extends Component {
	render(){
		const {updateFirst, updateLast, updateEmail} = this.props;
		return(
			<div className="parent-div">
				<div className="vert-align">                    
					<p>What is your name?</p> <br />

					<input type="text" placeholder="First Name" onChange={ev => updateFirst(ev.target.value)}/>
					<input type="text" placeholder="Last Name" onChange= {ev => updateLast(ev.target.value)}/>
					<input type="text" placeholder="email" onChange={ev => updateEmail(ev.target.value)}/>
					
					<Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		firstName: state.firstName,
		lastName: state.lastName,
		email: state.email
	};
}

const mapDispatchToProps = {
	updateFirst: updateFirst,
	updateLast: updateLast,
	updateEmail: updateEmail
};

export default connect(mapStateToProps, mapDispatchToProps)(WizardTen);