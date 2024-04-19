import React from "react";
import './Skills.css'; // Import CSS file for styling

const Skills = () => {
  return (
    <div id="skills">
      <h2>Skills</h2>
      <h3>Programming Languages:</h3>
      <ul>
        <li>Python (proficient)</li>
        <li>C/C++ (intermediate)</li>
        <li>Java (moderate)</li>
      </ul>
      <h3>Machine Learning:</h3>
      <ul>
        <li>pandas</li>
        <li>numpy</li>
        <li>mathplotlib</li>
        <li>seaborn</li>
        <li>Other ML related models (Basics)</li>
      </ul>
      <h3>Data Structures and Algorithms:</h3>
      <p>Intermediate level</p>
      <h3>Full Stack:</h3>
      <p>Frontend (HTML, CSS, JavaScript), React</p>
      <p>Backend (Node.js, Express.js)</p>
      <p>Databases: MySQL, MongoDB</p>
    </div>
  );
};

export default Skills;
