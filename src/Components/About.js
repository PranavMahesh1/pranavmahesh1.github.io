import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
      }

      return (
         <section id="about">
            <div class="row">
               <div class="column">
                  <h2>About Me</h2>
                  <p>I'm Pranav Mahesh, a third year CS student at Georgia Tech concentrating in <b>Information Internetworks and Artificial Intelligence</b>. My career interests are software development, cybersecurity, and artificial intelligence. My hobbies include playing the piano and violin and playing Nintendo games.</p>
                  <p>This summer, I was a <b>Software Development Engineer Intern</b> at <b>Amazon</b>, working to automate the process of third-party merchant creation for Just Walk Out Technology. I created an API to reduce the workflow from 20 minutes to 10 seconds. I also created a website that uses the API where business teams can create merchants themselves without having to communicate with software teams!</p>
                  <p>For the past 2 years, I worked for <a href="https://arcs.gatech.edu/">ARCS</a> to provide technical assistance for the students and faculty of the GT College of Sciences. This was especially important as classes transitioned from in-person to online due to COVID-19.</p>
                  <p>Check out some of my cool projects - I teamed up with a group of 4 last Summer to develop <a href="https://github.com/adamhannadev/quartet">Quartet</a>, a web application that allows choirs to sing together during COVID-19 - it records specific parts of a song and combines these parts to playback the recording.</p>
                  <p>One of my favorite projects I've created is <a href="https://pranavmahesh.com/yelper/">Yelper</a>, a React app that displays information about whatever restaurants you want! Feel free to try it out!</p>
                  
                  <p>I'm currently open to Software Engineering/Development Intern roles for Summer 2022. Email me if you want to get in touch!</p>
               </div>
               <div class="column">
                  <img alt="Software Development" src="./images/softwaredev.png" />
               </div>
            </div>
         </section>
      );
   }
}

export default About;