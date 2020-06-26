import React from 'react';
import axios from 'axios';
import '../css/layout.css';
import '../css/reset.css';
import '../css/style.css';

class Subject extends React.Component {
 constructor(props) {
  super(props)
         this.state = {
          subjects: []
        }; 
      }

  //code to get the details from database using axios     
  // componentDidMount() {
  //   axios.get(`http://localhost:3000`)
  //     .then(res => {
  //       const subjects = res.data;
  //       this.setState({ subject });
  //     })
  // }  
  render() {
    return (

      <div className="boxextra">

 
      <table>
        <tr>
          <th> coursename</th>
          <th> courseid</th>
          <th> Instructors</th>
         
         </tr>

         //write lines of JS code to enter the deatils in the table from database after uncommenting the axios above render
         <tr>
           <th>Math</th>
           <th> 1 </th>
          <th> Jeeu</th>
          </tr>
           <tr>
           <th>Math</th>
           <th> 1 </th>
          <th> Jeeu</th>
          </tr>
          <tr>
           <th>Math</th>
           <th> 1 </th>
          <th> Jeeu</th>
          </tr>
           <tr>
           <th>Math</th>
           <th> 1 </th>
          <th> Jeeu</th>
          </tr>
           <tr>
           <th>Math</th>
           <th> 1 </th>
          <th> Jeeu</th>
          </tr>
           <tr>
           <th>Math</th>
           <th> 1 </th>
          <th> Jeeu</th>
          </tr>
          <tr>
           <th>Math</th>
           <th> 1 </th>
          <th> Jeeu</th>
          </tr>
           <tr>
           <th>Math</th>
           <th> 1 </th>
          <th> Jeeu</th>
          </tr>


          <tr>
           <th>Math</th>
           <th> 1 </th>
          <th> Jeeu</th>
          </tr>
           <tr>
           <th>Math</th>
           <th> 1 </th>
          <th> Jeeu</th>
          </tr>
          <tr>
           <th>Math</th>
           <th> 1 </th>
          <th> Jeeu</th>
          </tr>
           <tr>
           <th>Math</th>
           <th> 1 </th>
          <th> Jeeu</th>
          </tr>
           <tr>
           <th>Math</th>
           <th> 1 </th>
          <th> Jeeu</th>
          </tr>
           <tr>
           <th>Math</th>
           <th> 1 </th>
          <th> Jeeu</th>
          </tr>
          <tr>
           <th>Math</th>
           <th> 1 </th>
          <th> Jeeu</th>
          </tr>
           <tr>
           <th>Math</th>
           <th> 1 </th>
          <th> Jeeu</th>
          </tr>




    </table>

       
    
   
    </div>



     
   
  );
  }
}
export default Subject;