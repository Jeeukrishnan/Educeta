import React from 'react';
import {Redirect} from 'react-router-dom';
import {Navbar} from '../navbar.js';

export class ViewTour extends React.Component {

    constructor(){
        super();

        this.state = {
            student: [],
        }
       
    }
    
    

  render () {
    var studentname = this.props.match.params.studentname;
    var id= this.props.match.params.id;
    var study = this.props.match.params.study;
    var parent = this.props.match.params.parent;



    return (
      <div>
        <Navbar
          dealLogout={() => {
            return <Redirect to="/login" />;
          }}
        />
        <br /> <br /> <br />
        <div className="form">
          <h1 className="display-5">Student Details</h1>
          <hr />
          <ul className="list-group w-100">
            <li className="list-group-item">Name: {studentname}</li>
            <li className="list-group-item">Student id: {id}</li>
            <li className="list-group-item">Study Method: {study}</li>
            <li className="list-group-item">Parent name: {parent}</li>
          </ul>
        </div>
      </div>
    );
  }
}
