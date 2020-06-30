import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import {Admininstructor} from './admininstructor';
import {Adminstudent} from './adminstudent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends React.Component {


render() {
  
return (
      <div>
     
             <Switch>

               <Route path='/admininstructor' component={Admininstructor} />
                <Route exact path='/adminstudent' component={Adminstudent} />} />
                 
               
             

             </Switch> 
     
     


      </div>
    );
  }
}

export default Main;