import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/layout.css'
import '../css/reset.css'
import '../css/style.css'


    function RenderMenuItem ({dish, onClick}) {
        return (
            <Card>
                <Link to={`/menu/${dish.id}`} >
                
                    <CardImg width="100%"  src={dish.image} alt={dish.name} />
                   
                        <CardTitle>{dish.name}</CardTitle>

                </Link>
            </Card>
        );
    }
    

    const Menu = (props) => {

        const menu = props.dishes.map((dish) => {
            return (
                <div className="col col-md-5 m-1"  key={dish.id}>
                    <RenderMenuItem dish={dish}  />
                </div>
            );
        });

         return (
        

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
              <h2 class="pad_bot1">Top Teachers</h2>
              <br></br>
               <br></br>
                <br></br>
                <h3><Link to="/instructor">Resister as a Instructor</Link></h3>
                 <br></br>
            </div>
          <div className="container">
                           
               <div className="col-20">
                  <div className="row ">
              
                    {menu}
               
                </div>
                </div>

                

            </div>
            </article>
          <article class="col2 pad_left2">
            <div class="pad_left1">
              <h2>New Teachers</h2>
            </div>
            <ul class="list1">
              <li><a href="#">Jeeu</a></li>
              <li><a href="#">Debraj</a></li>
              <li><a href="#">Educeta</a></li>
              <li><a href="#">Nykinsky</a></li>
              <li><a href="#">Startup</a></li>
            </ul>
            <div class="pad_left1">
              <h2>Testimonials</h2>
              <p class="quot"> <span><strong>
              <a href="#">William Horner</a></strong></span> 
              <span class="color1">Managing Director</span> 
              <span class="color2 pad_bot1">Company Name</span> 
              Nam libero tempore, cum soluta nobis esteligendi optio cumque nihil 
              impedit quo minusid quod maxime placeat facere possimus, o
              mnis voluptas assumenda estmnis dolor repellendus. </p>
            </div>
            <a href="#" class="button marg_top1">
            <span><span>&nbsp;&nbsp; View All &nbsp;&nbsp;</span></span></a> </article>
        </div>

      </div>
    </section>
 
  
  </div>
</div>
<script type="text/javascript">Cufon.now();</script>
</body>
    );
       
    }

export default Menu;