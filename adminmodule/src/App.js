import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/main';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      <div>
        <Main />
      </div>
       </BrowserRouter>
    );
  }
}


export default App;