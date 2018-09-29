import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchInterviewers } from '../actions';

class App extends Component {

  componentDidMount() {
		this.props.fetchInterviewers();
	}
  
  renderInterviewers() {
    return	_.map(this.props.interviewers, interviewer => {
			return (
				<li className="list-group-item" key={interviewer.results.username}>
					{interviewer.results.name}
				</li>
			);
		});
  }

  render() {
    console.log(this.props.interviewers);
		return (
			<div>
				<h3>Interviewers</h3>
				<ul className="list-group">
        		{this.renderInterviewers()}
				</ul>
			</div>
		);
  }
}

function mapStateToProps(state) {
	return { interviewers: state.interviewers };
}

export default connect(mapStateToProps, { fetchInterviewers })(App);
