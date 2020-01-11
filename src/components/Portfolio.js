import React, { Component } from 'react';


export default class Portfolio extends Component {

  render() {
    let raheemData = this.props.raheemData;

    return (

      <section id="portfolio">
      
      <div className="row">
        <div className="twelve columns collapsed">
          <h1> Music Videos </h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            raheemData.portfolio && raheemData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img" alt="something"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
  
}