import React from "react";
import './Home.css'; // Import CSS file for styling

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/rhushya-kc/"  target="_blank" className="social-link linkedin"></a> {/* LinkedIn */}
        <a href="https://github.com/Rhushya" target="_blank" className="social-link github"></a> {/* GitHub */}
        <a href="https://twitter.com/RhushyaKC" target="_blank" className="social-link twitter"></a> {/* Twitter */}
        {/* Add more social media links here */}
      </div>
      {/* Add additional about me details here */}
    </div>
  );
};

export default About;
