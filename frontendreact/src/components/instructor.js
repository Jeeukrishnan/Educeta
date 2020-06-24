import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import '../styles/signup.css';
// import {Navbar} from './navbarhomepg'

 class Instructor extends React.Component {
  constructor () {
    super ();

    this.state = {
      redirectToLogin: false,
    };

    this.addUser = this.addUser.bind (this);
  }

  addUser (e) {
    e.preventDefault ();
    console.log ('Adding');

    const obj = {
      name: e.target.name.value,
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
      class : e.target.class.value,
      subject : e.target.subject.value,
      mob : e.target.mob.value,
      link : e.target.link.value,
      experience : e.target.experience.value,
      resume : e.target.resume.value,
    
     



    };

  }
  //   fetch ('http://localhost:3001/users/register', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify (obj),
  //   })
  //     .then (res => {
  //       console.log (res);
  //       if (res.ok) return res.json ();
  //       else throw new Error ();
  //     })
  //     .then (res => {
  //       alert (`Account created Successfully `);
  //       this.setState ({redirectToLogin: true});
  //     })
  //     .catch (error => {
  //       alert (`That Username has been taken`);
  //       console.error (`Error adding user: ${error}`);
  //     });
  // }

  render () {
    if (this.state.redirectToLogin) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="Signup-component">
         
        <div className="login-page">
          <div className="form">

            <form onSubmit={this.addUser}>
              <input type="text" name="name" placeholder="Full Name" required />
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                required
              />
              <input
                type="text"
                name="username"
                placeholder="Pick an username"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Set a Password"
                required
              />
               <input
                type="text"
                name="class"
                placeholder="Your Highest education"
                required
              /> 
               <input
                type="text"
                name="subject"
                placeholder="Your subject"
                required
              /> 
               <input
                type="number"
                name="mob"
                placeholder="Instructor mobile no."
                required
              /> 
               <input
                type="url"
                name="link"
                placeholder="Demo video link"
                required
              /> 
              <input
                type="text"
                name="experience"
                placeholder="Your previous experience"
                required
              /> 
               <label for="resume">Select your resume:</label>
                <input
                type="file"
                name="resume"
                placeholder="Your resume"
                required
              /> 
            




              <button type="submit" name="signUp">SIGN UP</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Instructor ;
