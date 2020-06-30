import React from 'react';
 import {Navbar} from './navbar';
import { Link } from 'react-router-dom';

export class Admininstructor extends React.Component {
    constructor(){
        super();

        this.state = {
            instructors : [],
        }
        this.loadInstructors = this.loadInstructors.bind(this);
        this.deleteInstructors = this.deleteInstructors.bind(this);
    }
    componentDidMount() {
      this.loadInstructors();
    }

    loadHotels(){

        fetch(`http://localhost:3001/admin/instructors/view`, {
            method:"GET",
            headers: {
                "Content-Type" : "application/json"
            },
          })
          .then((response)=> {
            return response.json()
          })
          .then(res => {
            console.log(JSON.stringify(res));
            var arr=[];
            let size= res.length;
            for(let i=0;i<size;i++)
            {
              arr[i]=res[i];
            }
            this.setState({instructors:arr})  
          })
        
    }
    
    deleteHotels(instructorname) {

      fetch(`http://localhost:3001/admin/instructors/delete?instructorname=${encodeURIComponent(instructorname)}`,{

        method:"POST",
        headers: {
          "Content-Type" : "application/json"
        },
      })
    .then (res => {
      console.log (res);
      if (res.ok) return res.json ();
      else throw new Error ();
    })
    .then (res => {
      alert (`Instructor deleted Successfully `);
      this.loadInstructors();
    })
    .catch (error => {
      console.error (`Error adding user: ${error}`);
    });

    }






        render() {
            return (
                <div>
                    <Navbar dealLogout={this.props.dealLogout} />
                    <br />
                    <br />
                    <br />
                    
                <div className="py-4">
                <table class="table border shadow">
                 <thead class="thead-dark">
                  <tr>
                  <th scope="col">#</th>
                 <th scope="col">Instructor Name</th>
                 <th scope="col">Instructor id</th>
                 <th scope="col">Instructor phone</th>
                 <th scope="col">Subject</th>
           
                 <th>Action</th>
                  </tr>
                 </thead>
                 <tbody>
            {this.state.instructors.map((instructor, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{instructor.name}</td>
                <td>{instructor.id}</td>
                <td>{instructor.phone}</td>
                <td>{instructor.subject}</td>
              
                <td>
                  <Link class="btn btn-primary mr-2" to={`/admin/instructors/view/${instructor.name}/${instructor.id}/${instructor.phone}/${instructor.subject}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`instructors/edit/${instructor.name}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => this.deleteInstructors(instructor.name)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
                </table>
                </div>
                </div>

            );
        }


    }
