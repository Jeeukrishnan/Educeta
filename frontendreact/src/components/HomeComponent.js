import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import '../css/layout.css'
import '../css/reset.css'
import '../css/style.css'
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
    


function Home(props) {
    return(
 
<body id="page1">
<div class="body1">
  <div class="main">
 
    <header>

      <div class="wrapper">
        <h1><a href="index.html" id="logo">Educeta</a></h1>
      </div>
      <div id="slogan"> We Will Open The World<span>of knowledge for you!</span> </div>
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
      <div class="wrapper">
        <div class="pad1 pad_top1">
          <article class="cols marg_right1">
            <figure><a href="#"><img src="images/page1_img1.jpg" alt=""></img></a></figure>
            <span class="font1">Our Mission Statement</span> </article>
          <article class="cols marg_right1">
            <figure><a href="#"><img src="images/page1_img2.jpg" alt=""></img></a></figure>
            <span class="font1">Performance Report</span> </article>
          <article class="cols">
            <figure><a href="#"><img src="images/page1_img3.jpg" alt=""></img></a></figure>
            <span class="font1">Prospective Parents</span> </article>
        </div>
      </div>
      <div class="box1">
        <div class="wrapper">
          <article class="col1">
            <div class="pad_left1">
              <h2>Welcome to Educeta</h2>
              <p class="font2">Educeta is one of best website templates created by <span>nykinsky.com team</span></p>
              <p><strong>Educeta Template</strong> is for best education resolution. It’s also best &amp; CSS valid. This website template has several pages: <a href="courses.html">Courses</a>, <a href="programs.html">Programs</a>, <a href="teachers.html">Teachers</a>, <a href="admissions.html">Admissions</a></p>
            </div>
            <a href="#" class="button"><span><span>Read More</span></span></a>
            <div class="pad_left1">
              <h2>Individual Approach to Education!</h2>
            </div>
            <div class="wrapper">
              <figure class="left marg_right1"><img src="images/page1_img4.jpg" alt=""></img></figure>
              <p class="pad_bot1 pad_top2"><strong>Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore.</strong></p>
              <p> Learn Center Template goes with two packages – with PSD source files and without them. PSD source files are available for free for the registered members of Templates.com. The basic package (without PSD source is available for anyone without registration).</p>
            </div>
            <div class="pad_top2"> <a href="#" class="button"><span><span>Read More</span></span></a> </div>
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
              <h2>Latest News</h2>
            </div>
            <div class="wrapper"> <span class="date">27</span>
              <p class="pad_top2"><a href="#">April, 2011</a><br></br>
                Sed utirspiciatis unde omnis iste natus error sit...</p>
            </div>
            <div class="wrapper"> <span class="date">25</span>
              <p class="pad_top2"><a href="#">April, 2011</a><br></br>
                Voluptatem accusan dolore mque laudantium...</p>
            </div>
            <div class="pad_top2"> <a href="#" class="button"><span><span>Read More</span></span></a> </div>
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