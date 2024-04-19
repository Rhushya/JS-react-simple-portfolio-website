import React from "react";
import './Portfolio.css'; // Import CSS file for styling

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2>Projects</h2>
      <div className="project">
        <h3>7 Segment Display using Iverilog (iverilog)</h3>
        <p>Using Iverilog, you can simulate a 7-segment display by modeling its behavior through Verilog code and testing it with simulation tools.</p>
      </div>
      <div className="project">
        <h3>Hangman Game (HTML, CSS, JavaScript)</h3>
        <p>This game has been implemented using linked list and HTML, CSS, and JavaScript.</p>
      </div>
      <div className="project">
        <h3>Weather using Python API (Python - Requests)</h3>
        <p>This is a simple weather fetcher using the Requests library and API based on location.</p>
      </div>
      <div className="project">
        <h3>Adblocker Extension (JSON)</h3>
        <p>This is a simple adblocker extension using JSON and can be scaled to block other ads on any website.</p>
      </div>
    </div>
  );
};

export default Portfolio;
