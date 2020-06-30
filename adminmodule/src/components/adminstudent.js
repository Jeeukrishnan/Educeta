import React from 'react';
 import {Navbar} from './navbar';
import { Link } from 'react-router-dom';

export class Adminstudent extends React.Component {
    constructor(){
        super();

        this.state = {
            students : [],
        }
        this.loadStudents = this.loadStudents.bind(this);
        this.deleteStudents = this.deleteStudents.bind(this);
    }
    componentDidMount() {
      this.loadStudents();
    }

    loadHotels(){

        fetch(`http://localhost:3001/admin/students/view`, {
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
            this.setState({students:arr})  
          })
        
    }
    
    deleteStudents(studentname) {

      fetch(`http://localhost:3001/admin/students/delete?studentname=${encodeURIComponent(studentname)}`,{

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
      alert (`Student deleted Successfully `);
      this.loadHotels();
    })
    .catch (error => {
      console.error (`Error adding student: ${error}`);
    });

    }


    //        <tbody>
          //   {this.state.hotels.map((hotel, index) => (
          //     <tr>
          //       <th scope="row">{index + 1}</th>
          //       <td>{student.name}</td>
          //       <td>{student.id}</td>
          //       <td>{student.study}</td>
          //       <td>{student.username}</td>
          //       <td>{hotel.pusername}</td>
          //       <td>
          //         <Link class="btn btn-primary mr-2" to={`/admin/students/view/${student.name}/${student.id}/${student.study}/${hotel.username}/${student.pusername}`}>
          //           View
          //         </Link>
          //         <Link
          //           class="btn btn-outline-primary mr-2"
          //           to={`students/edit/${student.name}`}
          //         >
          //           Edit
          //         </Link>
          //         <Link
          //           class="btn btn-danger"
          //           onClick={() => this.deleteStudents(student.name)}
          //         >
          //           Delete
          //         </Link>
          //       </td>
          //     </tr>
          //   ))}
          // </tbody>

   





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
                 <th scope="col">student Name</th>
                 <th scope="col">Student id</th>
                 <th scope="col">Study</th>
                 <th scope="col">Student username</th>
                 <th scope="col">Parent username</th>
                 <th>Action</th>
                  </tr>
                 </thead>
          
                </table>
                </div>
                </div>

            );
        }


    }
