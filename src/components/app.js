import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchInterviewers } from '../actions';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      results:[]
    }
  }

  componentDidMount() {
		this.props.fetchInterviewers();
	}
  
  renderInterviewers() {
    return	_.map(this.props.interviewers, interviewer => {
			return (
        
				<li className="list-group-item" key={interviewer.email}>
       
        <div className="form-group">
        <div className="row inline-block">
          <img src={interviewer.picture.thumbnail} />
                
          {interviewer.name.first}&nbsp;{interviewer.name.last}</div>
          
          </div>
        </li>
    
			);
		});
  }

  render() {
    console.log(this.props.interviewers);
		return (
		<div className="container">
      <h3>Interviewers</h3>
        <div className="row">

        <div className="col-md-4">
        <h1>Applied</h1>
            <ul className="list-group">
               {this.renderInterviewers()}
            </ul>
          </div>
          
          <div className="col-md-4">
          <h1>Interviewed</h1>
            <ul className="list-group">
               {this.renderInterviewers()}
            </ul>
          </div>

          <div className="col-md-4">
          <h1>Hired</h1>
            <ul className="list-group">
               {this.renderInterviewers()}
            </ul>
          </div>
          
          </div>
    </div>
		
		);
  }
}

function mapStateToProps(state) {
	return { interviewers: state.interviewers };
}

export default connect(mapStateToProps, { fetchInterviewers })(App);
