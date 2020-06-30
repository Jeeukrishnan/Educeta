import React from 'react';
import {Redirect} from 'react-router-dom';
import {Navbar} from '../navbar.js';

export class ViewInstructor extends React.Component {

    constructor(){
        super();

        this.state = {
            instructor : [],
        }
       
    }
    
    

  render () {
    var name = this.props.match.params.name;
    var id= this.props.match.params.id;
    var subject = this.props.match.params.subject;
    var higheststudy = this.props.match.params.higheststudy;
    var expierence = this.props.match.params.expierence;


    return (
      <div>
        <Navbar
          dealLogout={() => {
            return <Redirect to="/login" />;
          }}
        />
        <br /> <br /> <br />
        <div className="form">
          <h1 className="display-5">Hotel Details</h1>
          <hr />
          <ul className="list-group w-100">
            <li className="list-group-item">Name: {name}</li>
            <li className="list-group-item">Id: {id}</li>
            <li className="list-group-item">Subject: {subject}</li>
            <li className="list-group-item">Highest Study: {higheststudy}</li>
            <li className="list-group-item">Expierence: {expierence}</li>
          </ul>
        </div>
      </div>
    );
  }
}
