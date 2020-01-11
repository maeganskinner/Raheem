import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
//import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
//import Testimonials from  './components/Testimonials';
//import ContactUs from './components/ContactUs';
//import Footer from './components/Footer';
import raheemData from './raheemData';


class App extends Component {

  render() {

    return (
      
      

      <div className="App">

        <Header raheemData={raheemData}/>
        <About raheemData={raheemData}/>
        <Portfolio raheemData={raheemData}/>

      </div>

      
    );

  }
  
}

export default App;