import React from 'react';
import './Resume.css'; // Import CSS file for styling

const Resume = () => {
  const handleDownload = () => {
    const resumeUrl = process.env.PUBLIC_URL + '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf'; // Set the file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="resume">
      <h2>Resume</h2>
      <p>Click the button below to download my resume:</p>
      <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
};

export default Resume;
