import React from "react";
import {Navbar} from  "../navbar.js";
import {Redirect} from 'react-router-dom';


export class EditHotel extends React.Component {

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
         instructorname: e.target.instrcutorname.value,
          instructorid: e.target.instructorid.value,
          instructorphone: e.target.instrcutorphone.value,
          instructorsubject: e.target.instructorsubject.value,
          instructorhigheststudy: e.target.instructorhigheststudy.value,
          instructoresume: e.target.instructoresume.value,
          instructordemo: e.target.instructordemo.value,
          instructorexpierence: e.target. instructorexpierence.value,
        //put everything available in database


        };
        console.log(obj);
        fetch ('http://localhost:3001/admininstrcutor/edit', {
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
            alert (`Instructor edited Successfully `);
            this.setState ({successful: true});
          })
          .catch (error => {
            console.error (`Error adding user: ${error}`);
          });
    }


 render(){
    if(this.state.successful) {
        return <Redirect to="/admin/instructor" />;
      }
    
    var hotelname = this.props.match.params.hotelname;

      return (
    <div>
      <div>
      <Navbar dealLogout={this.props.dealLogout} />
      </div>
      <br /><br /><br/>
     <div className="container" >
      <div >
        <h2 className="text-center mb-4">Edit A Hotel</h2>
        <form  onSubmit={e => this.onSubmit(e)}>
       
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              name="instructorname"
              value={instructorname}
              readOnly
            />
          </div>
  
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter instructorid"
              name="instructorid"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="instructor phone"
              name="instructorphone"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Subject of instrcutor"
              name="instructorsubject"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Instructor Highest Study"
              name="instructorhigheststudy"
            />
          </div>

          <div className="form-group">
            <input
              type="url"
              className="form-control form-control-lg"
              placeholder="Enter the link for demo"
              name="instructordemo"
            />
          </div>

          <div className="form-group">
            <input
              type="file"
              className="form-control form-control-lg"
              placeholder="Upload file of resume"
              name="instructorresume"
            />
          </div>  

           <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter expierence"
              name="instructorexpierence"
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