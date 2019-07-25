import React from 'react';
import './index.css';

class Contact extends React.Component{
  render(){
    return (
      <div>
      <h1>Contact Us</h1>
      <div class="container-fluid margBottom">
      <div class="row margBottom">
      <div class="col-sm-4">
      <h5>Email at: contact@blablabla.com</h5>
      <h5>Call us at:</h5>
      <h5>+91- 9863077000 (India)</h5>
      <h5>+1-415-738-5339 (USA)</h5>
      </div>

      <div class="col-sm-4">
      <h5>Email at: contact@blablabla.com</h5>
      <h5>Call us at:</h5>
      <h5>+91- 9863077000 (India)</h5>
      <h5>+1-415-738-5339 (USA)</h5>
      </div>

      <div class="col-sm-4">
      <h5>Email at: contact@blablabla.com</h5>
      <h5>Call us at:</h5>
      <h5>+91- 9863077000 (India)</h5>
      <h5>+1-415-738-5339 (USA)</h5>
      </div>
      </div>
      </div>
      <div class="iconCenter">
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-google"></a>
      </div>
      <h6 class="iconCenter">All Rights Reserved. © BLABLABLA Services Pvt. Ltd.</h6>
       </div>

    );
  }
}
export default Contact;
