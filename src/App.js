import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import raheemData from './raheemData';


class App extends Component {

  render() {

    return (
      
      

      <div className="App">

        <Header raheemData={raheemData}/>
        <About raheemData={raheemData}/>
        <Testimonials raheemData={raheemData}/>
        <Portfolio raheemData={raheemData}/>
       
        
        
        
        
        
        
      </div>

      
    );

  }
  
}

export default App;