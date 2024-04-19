import React from "react";
import './About.css'; // Import CSS file for styling

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <div className="about-section">
        <h3>Education</h3>
        <div className="education">
          <div className="education-item">
            <h4>B.Tech (Computer Science and Engineering)</h4>
            <p>University: PES, Bangalore</p>
            <p>Year: 2022 - Present</p>
            <p>GPA: 8.34 (CGPA)</p>
          </div>
          <div className="education-item">
            <h4>Higher Secondary (PCMC)</h4>
            <p>School: Kumarans, Bangalore</p>
            <p>Year: 2020 - 2022</p>
            <p>Percentage: 88% (92% in PCM)</p>
          </div>
          <div className="education-item">
            <h4>School (ICSE)</h4>
            <p>School: Baldwin, Bangalore</p>
            <p>Year: 2008 - 2020</p>
            <p>Percentage: 94%</p>
          </div>
        </div>
        {/* Add extra sections here */}
      </div>
      {/* Add additional about me details here */}
    </div>
  );
};

export default About;
