import React, { Component } from 'react';


export default class Testimonials extends Component {

  render() {
    let raheemData = this.props.raheemData;
    
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">

              <h1><span>Testimonials</span></h1>

            </div>
            <div className="ten columns flex-container">
              
              <br></br>
              <br></br> 
              <br></br>
              <br></br>
              <br></br> 
              <br></br>   

              
            </div> 
          </div> 
        </div>  
      </section>
        );
  }
}