
import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,Button, Form, FormGroup, Label, Input, Col,Row ,FormFeedback } from 'reactstrap';
import '../css/layout.css'
import '../css/reset.css'
import '../css/style.css'

import { Link } from 'react-router-dom';

class Contact extends Component {

    //   constructor(props) {
    //     super(props);

    //     this.state = {
    //         firstname: '',
    //         lastname: '',
    //         telnum: '',
    //         email: '',
    //         agree: false,
    //         contactType: 'Tel.',
    //         message: '',
    //         touched :{
    //             firstname :false ,
    //             lastname  :false ,
    //             telnum :false ,
    //             email : false 
    //         }
    //     };

    //     this.handleInputChange = this.handleInputChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
        
    // }

    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    
    //     this.setState({
    //       [name]: value
    //     });
    // }

    // handleSubmit(event) {
    //     console.log('Current State is: ' + JSON.stringify(this.state));
    //     alert('Current State is: ' + JSON.stringify(this.state));
    //     event.preventDefault();
    // }

    // handleBlur = (field) => (evt) => {

    //    this.setState({
          
    //       touched :{...this.state.touched ,[field] : true}           

    //    });


    // }

    // validate(firstname ,lastname ,telnum ,email)
    // {
    //         const errors ={
    //         firstname: '',
    //         lastname: '',
    //         telnum: '',
    //         email: ''


    //         };
    //     if(this.state.touched.firstname && firstname.length < 3 )
    //         errors.firstname='firstname should be greater than 3';
    //     else if(this.state.touched.firstname && firstname.length > 3 )
    //         errors.firstname='firstname should be less than 10';

    //     if(this.state.touched.lastname && lastname.length < 3 )
    //         errors.lastname='lastname should be greater than 3';
    //     else if(this.state.touched.lastname && lastname.length > 3 )
    //         errors.lastname='lastname should be less than 10';

    //     const reg=/^\d+$/ ;

    //     if(this.state.touched.telnum && !reg.test(telnum))
    //         errors.telnum='only numbers allowed';
    //     if(this.state.touched.email && email.split(' ').filter(x=>x==='@').length !==1 )
    //         errors.email='@ is required';

    //     return errors;

    // }

    

    render(){

   // const errors=this.validate(this.state.firstname ,this.state.lastname,this.state.telnum,this.state.email);
return(
<body id="page5">
<div class="body1">
  <div class="main">
 
    <header>
     
      <div class="wrapper">
        <h1><a href="index.html" id="logo">Educeta</a></h1>
      </div>
      <div id="slogan"> We Will Open The World<span>of knowledge for you!</span> </div>
    </header>

  </div>
</div>

<div class="body2">
  <div class="main">
  
    <section id="content">
      <div class="box1">
        <div class="wrapper">
          <article class="col1">
            <div class="pad_left1">
              <h2>Contact Form</h2>
              <form id="ContactForm" action="#">
                <div>
                  <div  class="wrapper"> <strong>Name:</strong>
                    <div class="bg">
                      <input type="text" class="input" />
                    </div>
                  </div>
                  <div  class="wrapper"> <strong>Email:</strong>
                    <div class="bg">
                      <input type="text" class="input" />
                    </div>
                  </div>
                  <div  class="textarea_box"> <strong>Message:</strong>
                    <div class="bg">
                      <textarea name="textarea" cols="1" rows="1"></textarea>
                    </div>
                  </div>
                  <a href="#" class="button"><span><span>Send</span></span></a> 
                  </div>
              </form>

            </div>
            </article>
        
          <article class="col2 pad_left2">
            <div class="pad_left1">
              <h2>Miscellaneous <span>Info</span></h2>
              <p>Quia voluptas sit aspernatur aut odit aut fugit, seduia consequuntur magni dolores eos qui ratione. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.<br></br>
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

  </div>
</div>
<script type="text/javascript">Cufon.now();</script>
</body>
    );
}
}
export default Contact;