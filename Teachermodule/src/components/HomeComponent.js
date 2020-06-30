import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import '../css/layout.css'
import '../css/reset.css'
import '../css/stylet.css'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';






function Home(props) {
    return(
 


     <div>
      
      <div class="box1">
        <div class="wrapper">
          <article class="col1">
            <div class="pad_left1">
              <h2>Welcome to Educeta</h2>
              <p class="font2">Educeta is one of best website for your <span>tecahing skills</span></p>
              <p><strong>Educeta </strong> provides best education resolution. It’s also best &amp; CSS valid. </p>
            </div>
        
            <div class="pad_left1">
              <h2>Get to know about your details with us!</h2>
            </div>
            <div class="wrapper">
             
              <p class="pad_bot1 pad_top2"><strong>Click on the below link to get your details</strong></p>
              <p><Link to="/login">Your Details</Link></p>
            </div>
       
          </article>
         
        </div>
      </div>
      <div id="colorstrip"/>

      <div className="footer">
         <div class="wrapper">
        <div class="pad1">
          <div class="pad_left1">
            <div class="wrapper">
              <article class="col_1">
                <h3>Address:</h3>
                <p class="col_address"> <strong> Country:<br></br>
                  City:<br></br>
                  Address:<br></br>
                  Email: </strong> </p>
                <p>India<br></br>
                  Noida<br></br>
                  Delhi 54<br></br>
                  <a href="#">educeta@mail.com</a> </p>
              </article>
              <article class="col_2 pad_left2">
                <h3>Join In:</h3>
                <ul class="list2">
                  <li><a href="signup.html">Sign Up</a></li>
                  <li><a href="#">Forums</a></li>
                  <li><a href="#">Promotions</a></li>
                  <li><a href="#">Lorem</a></li>
                </ul>
              </article>
              <article class="col_3 pad_left2">
                <h3>Why Us:</h3>
                <ul class="list2">
                  <li><a href="#">Lorem ipsum dolor </a></li>
                  <li><a href="#">Aonsect adipisic</a></li>
                  <li><a href="#">Eiusmjkod tempor </a></li>
                  <li><a href="#">Incididunt ut labore </a></li>
                </ul>
              </article>
          
                <h3>Newsletter:</h3>
                <form id="newsletter" action="#" method="post">
                  <div class="wrapper">
                    <div class="bg">
                      <input type="text"/>
                    </div>
                  </div>
                
                </form>
              
            </div>
            <div class="wrapper">
              <article class="call"> <span class="call1">Call Us Now: </span><span class="call2">1-800-567-8934</span> </article>
              <article class="col_4 pad_left2">Copyright &copy; <a href="#">Nykinsky</a> All Rights Reserved<br></br></article>
           
            </div>
          </div>
        </div>
      </div>
      </div>

      </div>


    );
}

export default Home;