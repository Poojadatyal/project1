import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Banner from './components/Banner';
import OurWork from './components/OurWork';
import TextHeader from './components/TextHeader';
import Contact from './components/Contact';

function App() {
  return (
    <div>

    <div><Header /></div>
   <div><Banner /></div>
   <div><OurWork /></div>
   <div><TextHeader /></div>
   <div><Contact /></div>
  </div>
 );
}
export default App;
