import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import '../css/layout.css'
import '../css/reset.css'
import '../css/style.css'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

// function RenderCard({item}) {

//     return(
//         <Card>
//             <CardImg src={item.image} alt={item.name} />
//             <CardBody>
//             <CardTitle>{item.name}</CardTitle>
//             {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
//             <CardText>{item.description}</CardText>
//             </CardBody>
//         </Card>
//     );

// }
  //    const people = [
   
  //   { id: 2, name: 'Courses' },
  //    { id: 3, name: 'Instructors' },
  // ];



function Home(props) {
    return(
 

<body id="page1">

<div class="body2">
  <div class="main">
  
    <section id="content">
 
      <div class="box1">
        <div class="wrapper">
          <article class="col1">
            <div class="pad_left1">
              <h2>Welcome to Educeta</h2>
              <br></br>
 
    <h4>Click on the below links to get the list</h4>
    <br></br>
        <h5><Link to="/subjects">List of courses and instructors</Link></h5>
        <h5><Link to="/test">List of tests available</Link></h5>

           
            </div>
          
            <div class="pad_left1">
              <h2>Method of Study</h2>
            </div>
            <div class="wrapper">
              <ul class="list1">
               <li><Link to="/form">Study</Link></li>
             <li><Link to="/tform">Test</Link></li>
                 <li><Link to="/counselling">Counselling</Link></li>
             <li><Link to="/stform">Study & Test</Link></li>
            
            </ul>
            </div>
          
          </article>
          <article class="col2 pad_left2">
            <div class="pad_left1">
              <h3>Payment Methods We Offer</h3>
            </div>
            <ul class="list1">
              <li>Hourly Pay</li>
              <li>Subject Pay</li>
              <li>Chapter Pay</li>
              <li>Partial Pay</li>
            
            </ul>
            <div class="pad_left1">
              <h2>Your Performance</h2>
            </div>
            <div class="wrapper"> 
              <p class="pad_top2"><Link to="/ptest">Your Previous Test</Link>
                </p>
            </div>
            <div class="wrapper"> 
              <p class="pad_top2"><Link to="/psubject"> Your Previous Course </Link>
              </p>
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

export default Home;