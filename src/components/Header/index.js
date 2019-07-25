import React from 'react';
import "./index.css";
//import Button from 'react-bootstrap/Button';

class Header extends React.Component{
    render(){
        return (
          <nav class="navbar navbar-default marg">
 <div class="container-fluid">
   <div class="navbar-header">
     <a class="navbar-brand cen" href="#" >LOGO</a>
   </div>
   <ul class="nav navbar-nav">
     <li><a href="#"><h4>Home</h4></a></li>
     <li><a href="#"><h4>About Us</h4></a></li>
     <li><a href="#"><h4>Careers</h4></a></li>
     <li><a href="#"><h4>Contact</h4></a></li>
   </ul>
 </div>
</nav>


          );

    }
}

export default Header;
