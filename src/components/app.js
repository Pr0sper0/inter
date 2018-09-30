import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchInterviewers } from '../actions';
import Entity from './Entity';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedEntity: null,
      temp:[],
      applied:[],
      interviewing:[],
      hired:[]
    }

  }

  componentDidMount() {
    this.props.fetchInterviewers();
    this.setState(prevstate => ({
      temp: [ ...prevstate.temp, this.props.interviewers.results]
     }));   
     console.log(this.state.temp); 
  }
  
  addNewElement = (value) => {

    this.setState(prevstate => ({
    interviewing: [ ...prevstate.interviewing, value.interviewer]
          }));
    console.log(this.state.interviewing);
  }

  goRight (data, container, number) {
    var array = container;
    var index = array.indexOf(data.interviewer);
    array.splice(index,1);
    this.setState({container: array});
    console.log(this.props.container);
    if (data) { this.addNewElement(data, number+1); }

}

  goLeft = (data, container, number) => {
    var array = this.props.interviewers;
    var index = array.indexOf(data.interviewer);
    array.splice(index,1);
    this.setState({interviewers: array});
    console.log(this.props.interviewers);
    if (data) { this.addNewElement(data); }
  }


  renderInterviewers = (value, number) => {
    return	_.map(value, interviewer => {
			return (
      
				<li className="list-group-item" key={interviewer.email}>
        <div >
             <Entity item={interviewer}/>
            {(number > 1) &&
            <button className="btn btn-primary" onClick={() => this.goLeft({interviewer}, value, number)}>
              Go left
            </button>
            }
             {(number < 3) &&
            <button style={{textAlign: "end"}} className="btn btn-primary" onClick={() => this.goRight({interviewer}, value, number)}>
                      Go right
             </button>
             }
        </div>
        </li>
			);
		});
  }

  render() {
    console.log("PP " + this.state.interviewers);
		return (
		<div className="container">
      <h3>Interviewers</h3>
        <div className="row">

        <div className="col-md-4">
        <h1>Applied</h1>
            <ul className="list-group">
               {this.renderInterviewers(this.props.interviewers, 1)}
            </ul>
          </div>
          
          <div className="col-md-4">
          <h1>Interviewed</h1>
            <ul className="list-group">
               {this.renderInterviewers(this.state.interviewing, 2)}
            </ul>
          </div>

          <div className="col-md-4">
          <h1>Hired</h1>
            <ul className="list-group">
               {this.renderInterviewers(this.state.hired, 3)}
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
