import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

import { Switch, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/login.css';
import '../css/signup.css';


class STForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
      this.states = {
      values: [
        { name: 'Hourly', id: 1 },
        { name: 'Chapter', id: 2 },
        { name: 'Subject', id: 3 },
        { name: 'Partial', id: 4 }
      ]
    };

     this.study = {
      values: [
        { name: 'study', id: 1 },
        { name: 'Test', id: 2 },
        { name: 'Counselling', id: 3 },
        { name: 'study & test', id: 4 }
      ]
    };
  
   

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A form was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {

    let optionTemp = this.study.values.map(v => (
      <option value={v.id}>{v.name}</option>
    ));
    let optionTemplate = this.states.values.map(v => (
      <option value={v.id}>{v.name}</option>
    ));


    return (
    <div className="Signup-component">
         
        <div className="login-page">
   
          <div className="form">
    <form onSubmit={this.handleSubmit}>
    < input type="text" name="name" placeholder="Full Name" required />
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                required
              />
              <input
                type="text"
                name="username"
                placeholder="Your username"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                required
              />
               <input
                type="text"
                name="class"
                placeholder="Your class"
                required
              /> 
               <input
                type="text"
                name="subject"
                placeholder="Your required subject"
                required
              /> 
               <input
                type="text"
                name="tecaher"
                placeholder="Instructor you want"
                required
              /> 
                   <input
                type="text"
                name="parname"
                placeholder="Parents username"
                required
              /> 

              <br></br>
                            <br></br>


               <label>
            Your Payment Options:
           <select value={this.states.value} onChange={this.handleChange}>
             {optionTemplate}
             </select>
           </label>
            <br></br>
                            <br></br>
                  <br></br>

                 <label>
            Your Study Options:
           <select value={this.study.value} onChange={this.handleChange}>
             {optionTemp}
             </select>
           </label>
            <br></br>
                            <br></br>
                  <br></br>

             



              <button type="submit" value="signUp">SUBMIT</button>
      </form>
      </div>
      </div>
      </div>
    );
  }
}

export default STForm ;