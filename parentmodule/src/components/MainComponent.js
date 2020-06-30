import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Login from './login';
import Home from './HomeComponent'
// import Header from './Headercomponent';
// import Footer from './FooterComponent';

import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       dishes: DISHES,
  //       comments: COMMENTS,
  //     promotions: PROMOTIONS,
  //     leaders: LEADERS
  //   };
  // }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId});
  // }

 

  render() {
    //  const HomePage = () => {
    //   return(
    //       <Home 
    //        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
    //           promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
    //           leader={this.state.leaders.filter((leader) => leader.featured)[0]}
    //       />
    //   );
    // }
    //   const DishWithId = ({match}) => {
    //   return(
    //       <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
    //         comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    //   );
    // };

    return (
      <div>
     
             <Switch>

               <Route path='/HomeComponent' component={Home} />
                <Route exact path='/login' component={Login} />} />
         
               
              <Redirect to="/HomeComponent" />

             </Switch> 
     
     


      </div>
    );
  }
}

export default Main;