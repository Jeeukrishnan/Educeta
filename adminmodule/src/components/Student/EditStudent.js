import React from "react";
import {Navbar} from  "../navbar.js";
import {Redirect} from 'react-router-dom';


export class EditTour extends React.Component {

    constructor() {
        super();

        this.state = {
            successful: false,
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
        e.preventDefault ();
    
        const obj = { 
          studentname: e.target.studentname.value,
          studentid : e.target.studentid.value,
          parentname : e.target.parentname.value,
         
          study :e.target.username.value,
          payment :e.target.payment.value,
          parentusername :e.target.parentusername.value,
          budget :e.target.budget.value,
          class :e.target.class.value,
        };
        console.log(obj);
        fetch ('http://localhost:3001/adminstudent/edit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify (obj),
        })
          .then (res => {
            console.log (res);
            if (res.ok) return res.json ();
            else throw new Error ();
          })
          .then (res => {
            alert (`Student  edited Successfully `);
            this.setState ({successful: true});
          })
          .catch (error => {
            console.error (`Error adding user: ${error}`);
          });
    }


 render(){
    if(this.state.successful) {
        return <Redirect to="/admin/student" />;
      }
    
    var studentname = this.props.match.params.studentname;

      return (
    <div>
      <div>
      <Navbar dealLogout={this.props.dealLogout} />
      </div>
      <br /><br /><br/>
     <div className="container" >
      <div >
        <h2 className="text-center mb-4">Edit A Tourist Place</h2>
        <form  onSubmit={e => this.onSubmit(e)}>
           <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              name="studentrname"
              value={studentname}
              readOnly
            />
          </div>
  
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter studentid"
              name="studentid"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="parentname"
              name="parentname"
            />
          </div>

      
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Student Study"
              name="study"
            />
          </div>

          <div className="form-group">
            <input
              type="url"
              className="form-control form-control-lg"
              placeholder="Enter the payment"
              name="payment"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="update parentusername"
              name="parentusername"
            />
          </div>  

           <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter class"
              name="class"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter budget"
              name="budget"
            />
          </div>

          <button className="btn btn-warning btn-block">Update Hotel</button>
        </form>
      </div>
    </div>
    </div>
    );
 };
};