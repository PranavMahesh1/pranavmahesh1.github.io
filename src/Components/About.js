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
                  <p>I'm Pranav Mahesh, a rising second-year CS student at Georgia Tech who's passionate about software development, cybersecurity, and artificial intelligence. My interests include playing the piano and violin, practicing karate, playing Nintendo games, and learning new technical skills.</p>
                  <p>In May, I participated in Capital One's <a href="https://campus.capitalone.com/summits/">Software Engineering Summit</a>, learning about AWS, Machine Learning, Arduinos, and Android Development.
                  This summer, I'm working remotely for <a href="https://arcs.gatech.edu/">ARCS</a> to provide technical support for the students and faculty of the GT College of Sciences during the COVID-19 pandemic, along with taking some summer classes and expanding my technical skills.
                  </p>
                  <p>I'm currently open to Software Engineering/Development Intern roles for Summer 2021.</p>
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