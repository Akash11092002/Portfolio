import React from 'react';
import './About.css'
import profile_img from '../../assets/profile.jpg'
const AboutMe = () => {
  return (
    <div id='about' className="about-me">
      <div className="profile-image">
        <img src={profile_img} alt="Profile Image" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
        Hello! I'm Akash Maurya, a passionate and enthusiastic fresh graduate in Information Technology from Abes Engineering College. Throughout my B.Tech journey, I've developed a strong foundation in various aspects of IT, including software development, web technologies, and data structures.

My academic journey has not only equipped me with technical knowledge but also honed my problem-solving skills and ability to work effectively in team environments. I've had the opportunity to work on several academic projects where I applied my skills in programming languages like Java,  and JavaScript, as well as frameworks such as React , Node.js and Express.js.
        </p>
        <p>
      

I'm excited to embark on my professional journey, and I look forward to opportunities that allow me to apply my skills and learn from experienced professionals in the field.


        </p>
        <div className="skills">
          <h3>Skills:</h3>
          <ul>
            <li>
              <span className="bar"></span>
              <span>Java</span>
            </li>
            <li>
              <span className="bar"></span>
              <span>Javascript</span>
            </li>
            <li>
              <span className="bar"></span>
              <span>NodeJS</span>
            </li>
            <li>
              <span className="bar"></span>
              <span>ReactJS</span>
            </li>
            <li>
              <span className="bar"></span>
              <span>Git & Github</span>
            </li>
            <li>
              <span className="bar"></span>
              <span>SQL</span>
            </li>
            <li>
              <span className="bar"></span>
              <span>HTML &CSS</span>
            </li>
            
          </ul>
        </div>
        <div className="stats">
          <div>
            <h3>Enthusiastic Learner</h3>
          
          </div>
          
          <div>
            <h3>Excited to Start New Challenges</h3>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;