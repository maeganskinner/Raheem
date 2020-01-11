import React, { Component } from 'react';
//import './Header.css';



export default class Header extends Component {

  render() {
    let raheemData = this.props.raheemData;

    return (
      <React.Fragment>
      
      <header id="home">


         <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>

          <a className="mobile-btn" href="/#" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               <li className="current"><a  href="#home">Home</a></li>
               <li><a  href="#about"> About  </a></li>
             <li><a  href="#resume"> Resume </a></li>
               <li><a  href="#portfolio"> Music </a></li>
               <li><a  href="#testimonials"> Reviews </a></li>
               <li><a  href="#contact"> Contact </a></li>
            </ul>

         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1> 
               

                {raheemData.name}.</h1>
               
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {raheemData.role}{raheemData.roleDescription}
               </h3>
               <hr/>


               




            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }

}