import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var resumeDownload = this.props.data.resumedownload;
      }

      return (
         <section id="about">
            <div class="row">
               <div class="column">
                  <h2>About Me</h2>
                  <p>I'm Pranav Mahesh, a second-year CS student at Georgia Tech concentrating in <b>Information Internetworks and Artificial Intelligence</b>. I love software development, cybersecurity, and artificial intelligence. My hobbies include playing the piano and violin, practicing karate, playing Nintendo games.</p>
                  <p>This past year, I've worked for <a href="https://arcs.gatech.edu/">ARCS</a> to provide technical assistance for the students and faculty of the GT College of Sciences. This was especially important as classes transitioned from in-person to online due to COVID-19.</p>
                  <p>This summer, I took Physics and Calculus 3, along with expanding my technical skills by teaming up with a group of 4 to develop <a href="https://github.com/adamhannadev/quartet">Quartet</a>, a web application that allows choirs to sing together during COVID-19 - it records specific parts of a song and combines these parts to playback the recording.</p>
                  
                  <p>I'm currently open to Software Engineering/Development Intern roles for Summer 2021. Email me if you want to get in touch!</p>
               </div>
               <div class="column">
                  <img alt="Software Development" src="./images/softwaredev.png" />
               </div>
            </div>
            <div className="row">
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </section>
      );
   }
}

export default About;