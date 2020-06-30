import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import '../css/layout.css'
import '../css/reset.css'
import '../css/style.css'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';






function Home(props) {
    return(
 
<body id="page1">
<div class="body1">
  <div class="main">
 
    <header>

      <div class="wrapper">
        <h1><a href="index.html" id="logo">Educeta</a></h1>
      </div>
      <div id="slogan"> We Open The World<span>of knowledge for your child!</span> </div>
      <ul class="banners">
        <li><a href="#"><img src="images/banner1.jpg" alt=""></img></a></li>
        <li><a href="#"><img src="images/banner2.jpg" alt=""></img></a></li>
        <li><a href="#"><img src="images/banner3.jpg" alt=""></img></a></li>
      </ul>
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
              <h2>Welcome to Educeta</h2>
              <p class="font2">Educeta is one of best website for your <span>child  education</span></p>
              <p><strong>Educeta </strong> provides best education resolution. It’s also best &amp; CSS valid. </p>
            </div>
        
            <div class="pad_left1">
              <h2>Get to know about his Education with us!</h2>
            </div>
            <div class="wrapper">
             
              <p class="pad_bot1 pad_top2"><strong>Click on the below link to get your chlid details</strong></p>
              <p><Link to="/login">Performance</Link></p>
            </div>
       
          </article>
          <article class="col2 pad_left2">
            <div class="pad_left1">
              <h2>New Programs</h2>
            </div>
            <ul class="list1">
              <li><a href="#">Physics</a></li>
              <li><a href="#">Math</a></li>
              <li><a href="#">Economics</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Education</a></li>
            </ul>
          
       
            
           
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