import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends React.Component{
	 constructor(props) {
        super(props);
    
        this.state = {
            isNavOpen: false,
            isModalOpen: false

        
        };
          this.toggleNav = this.toggleNav.bind(this);

        this.toggleModal = this.toggleModal.bind(this);
         this.handleLogin = this.handleLogin.bind(this);
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      
      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }


    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

  
  render()
  { return( 
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Educeta' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> Courses</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Teachers</NavLink>
                            </NavItem>
                          
                             <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                             <NavItem>
                                <NavLink className="nav-link" to='/signup'><span className="fa fa-address-card fa-lg"></span> Student Registration</NavLink>
                            </NavItem>

                          
                            <NavItem>
                                <NavLink className="nav-link" to='/parents'><span className="fa fa-address-card fa-lg"></span> Parents Registration</NavLink>
                            </NavItem>
                             <NavItem>
                                <NavLink className="nav-link" to='/login'><span className="fa fa-address-card fa-lg"></span> Login</NavLink>
                            </NavItem>


                               </Nav>
                            
                                  
                          
                        </Collapse>
                        



                    </div>
                </Navbar>
                   
              
                   
                    

              </React.Fragment>
        );



  }



}

export default Header;