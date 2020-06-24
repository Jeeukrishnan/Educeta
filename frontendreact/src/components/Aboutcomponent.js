import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/layout.css'
import '../css/reset.css'
import '../css/style.css'




// function RenderLeader({leader}) {
//     return(
//         <div key={leader.id} className="col-12 mt-5">
//             <Media tag="li">
//                 <Media left middle>
//                     <Media object src={leader.image} alt={leader.name} />
//                 </Media>
//                 <Media body className="col-12">
//                     <Media heading>{leader.name}</Media>
//                     <p>{leader.designation}</p>
//                     <p>{leader.description}</p>
//                 </Media>    
//             </Media>
//         </div>
//     );
// }

function About(props) {

    

    return(
       <body id="page3">
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
              <h2 class="pad_bot1">Academic Programs</h2>
            </div>
            <div class="wrapper pad_bot2">
              <figure class="left marg_right1"><img src="images/page3_img1.jpg" alt=""></img></figure>
              <p class="pad_bot1 pad_top2"><strong>At vero eos et accusamus et iusto odio</strong> <br></br>
                Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt.</p>
              <a href="#" class="button marg_left1"><span><span>Read More</span></span></a> </div>
            <div class="wrapper pad_bot2">
              <figure class="left marg_right1"><img src="images/page3_img2.jpg" alt=""></img></figure>
              <p class="pad_bot1 pad_top2"><strong>At vero eos et accusamus et iusto odio</strong> <br></br>
                Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt.</p>
              <a href="#" class="button marg_left1"><span><span>Read More</span></span></a> </div>
            <div class="wrapper">
              <figure class="left marg_right1"><img src="images/page3_img3.jpg" alt=""></img></figure>
              <p class="pad_bot1 pad_top2"><strong>At vero eos et accusamus et iusto odio</strong> <br></br>
                Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt.</p>
              <a href="#" class="button marg_left1"><span><span>Read More</span></span></a> </div>
          </article>
          <article class="col2 pad_left2">
            <div class="pad_left1">
              <h2>New Programs</h2>
            </div>
            <ul class="list1">
              <li><a href="#">International Studies</a></li>
              <li><a href="#">Models &amp; Language Reaching</a></li>
              <li><a href="#">Public School Facts</a></li>
              <li><a href="#">State Testing Data</a></li>
              <li><a href="#">Education Jobs</a></li>
            </ul>
            <div class="pad_left1">
              <h2>Testimonials</h2>
              <p class="quot"> <span><strong><a href="#">William Horner</a></strong></span> <span class="color1">Managing Director</span> <span class="color2 pad_bot1">Company Name</span> Nam libero tempore, cum soluta nobis esteligendi optio cumque nihil impedit quo minusid quod maxime placeat facere possimus, omnis voluptas assumenda estmnis dolor repellendus. </p>
            </div>
            <a href="#" class="button marg_top1"><span><span>&nbsp;&nbsp; View All &nbsp;&nbsp;</span></span></a> </article>
        </div>
      </div>
    </section>
 
  
  </div>
</div>
<script type="text/javascript">Cufon.now();</script>
</body>
    );
}

export default About;    