import React from 'react';
import './index.css';
import Card from '../Card';

class TextHeader extends React.Component{
  render()
  {
    return (

      <div>
      <h1>OUR VALUES</h1>
      <Card />

      <div>
      <div class="col-md-4">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="col-md-4">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="col-md-4">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      </div>
</div>

    );
  }
}
export default TextHeader;
