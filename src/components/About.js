import React, { Component } from 'react';


export default class About extends Component {
  render() {

    let raheemData = this.props.raheemData;

    return (
        <>
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="Raheem Jamaal" />

            </div>

            <div className="nine columns main-col">

               <h2>About Raheeem </h2>
               <p>
               {
                 raheemData.aboutme
               }
               </p>


                <br></br>
                <br></br>


            
               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>

                  <p className="address">
       						<span>{raheemData.name}</span>

                     <br></br>
       						   <span>
                     {raheemData.address}
                    </span>

                    <br></br>
                    <span>{raheemData.website}</span>

                    <br></br>
                    <span>{raheemData.email}</span>

                    <br></br>
                    <span>{raheemData.phone}</span>

                    <br></br>
                    <span>{raheemData.facebook}</span>

                    <br></br>
                    <span>{raheemData.twitter}</span>

                    <br></br>
                    <span>{raheemData.instagram}</span>

                    <br></br>
                    <span>{raheemData.youtube}</span>

                    <br></br>
                    <span>{raheemData.spotify}</span>

                    <br></br>
                    <span>{raheemData.apple}</span>

                    <br></br>
                    <span>{raheemData.iheart}</span>

                    <br></br>
                    <span>{raheemData.deezer}</span>







       					   </p>
                  </div>
               </div>
               



            </div>
         </div>
      </section>
      </>

    );
  }
  
}