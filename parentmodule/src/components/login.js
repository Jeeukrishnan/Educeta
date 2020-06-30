import React from 'react' ;
import { Link , Redirect} from 'react-router-dom';
import '../css/login.css'
// import {Navbar} from './navbarhomepg'
//after successful login connect to psubject and ptest

 class Login extends React.Component {
    
    constructor() {
        
        super();
        this.state={
            
            redirectToHome:false,
            redirectToSignup:false,
       
        }
        
        this.handleLogin=this.handleLogin.bind(this);
       
        this.handleSignup=this.handleSignup.bind(this);
    }
   
    handleSignup(){
        this.setState({
            redirectToSignup: true
        })
    }
    handleLogin(name,pass){

       
        console.log("Adding")
        
        const obj={
            username: name,
            password: pass,
        };}

    //     fetch("http://localhost:3001/users/login",{
        
    //     method:"POST",
    //     headers: {
    //         "Content-Type" : "application/json"  ,
    //     },
    //     body: JSON.stringify(obj)
    //     })
    //     .then(res => {
    //         console.log(res);
    //         if (res.ok) return res.json()
    //         else throw new Error()
    //     })
    //     .then(res => {
    //          this.props.dealSubmit();
    //         this.setState({redirectToHome:true});
    //         this.props.setusername(name);
    //     })
    //     .catch(error => {
              
    //             alert('Wrong UserName Password')
    //         console.error(`Error adding user: ${error}`)
    //     })
    // }
    // handleAdmin(e){
    //     e.preventDefault();

    //     const obj={
    //         username: e.target.username.value,
    //         password: e.target.password.value
    //     }
    //     fetch("http://localhost:3001/admin/login",{
        
    //     method:"POST",
    //     headers: {
    //         "Content-Type" : "application/json" ,
    //     },
    //     body: JSON.stringify(obj)
    //     })
    //     .then(res => {
    //         console.log (res);
    //         if (res.ok) return res.json ();
    //         else throw new Error()
    //     })
    //     .then(res => {
    //         this.props.dealSubmitAdmin();
    //         this.setState({redirectToAdmin:true});
         
    //     })
    //     .catch(error => {
    //         this.handleLogin(obj.username,obj.password);  
    //     })
  


    // }
    render() {
       
        // if(this.state.redirectToHome)
        // {
        //     return <Redirect to="/main"/>
        // }
        if(this.state.redirectToSignup)
        {
            return <Redirect to="/signup"/>
        }
        return ( 
         <div className='Login-component'>
         
            <div className="login-page">
                <div className="form">
          
                    <form onSubmit={this.handleAdmin}>
                        <input type="text" placeholder="&#xf007;  Your child's name" name="username" required/>
                        <input type="password" placeholder="&#xf023;  Your Password" name="password" required/>
                        <button type="submit" id="submit">LOGIN</button>
                    </form>
          
                 
                </div>
            </div>
        </div>
        )

        
    }
}

export default Login ;