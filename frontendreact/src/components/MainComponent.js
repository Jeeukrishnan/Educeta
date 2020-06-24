import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Signup from './signup';
import Parents from './parents';
import Login from './login';
import Instructor from './instructor';
import Contact from './ContactComponent';
import DishDetail from './DishDetailedComponent';
import { DISHES } from '../shared/dishes';
import About from './Aboutcomponent';
import Header from './Headercomponent';
import Footer from './FooterComponent';
import { COMMENTS } from '../shared/coments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

 

  render() {
     const HomePage = () => {
      return(
          <Home 
           dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
      const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    return (
      <div>
       <Header/>
             <Switch>
               <Route path='/home' component={HomePage} />
                   <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                   <Route exact path='/contactus' component={Contact} />} />
                   <Route exact path='/signup' component={Signup} />} />
                    <Route exact path='/login' component={Login} />} />
                     <Route exact path='/instructor' component={Instructor} />} />
                    <Route exact path='/parents' component={Parents} />} />
                      <Route path='/menu/:dishId' component={DishWithId} />
                       <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
              <Redirect to="/home" />

             </Switch> 
     
      <Footer />
      </div>
    );
  }
}

export default Main;