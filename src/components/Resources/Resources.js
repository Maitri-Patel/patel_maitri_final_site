import React from 'react';
import stackOverflowIcon from '../../assets/images/stackoverflow.png'; // Ensure the image exists
import mdnWebDocsIcon from '../../assets/images/mdnWebDocs.png'; // Ensure the image exists
import githubIcon from '../../assets/images/github.png'; // Ensure the image exists

const resources = [
  {
    title: "Stack Overflow",
    imageUrl: stackOverflowIcon,
    summary: "A platform to find answers to tricky coding questions or post your own queries.",
    link: "https://stackoverflow.com"
  },
  {
    title: "MDN Web Docs",
    imageUrl: mdnWebDocsIcon,
    summary: "A comprehensive resource for open web technologies, including HTML, CSS, and JavaScript.",
    link: "https://developer.mozilla.org"
  },
  {
    title: "GitHub",
    imageUrl: githubIcon,
    summary: "A web-based hosting service for version control using Git. It's essential for managing project revisions.",
    link: "https://github.com"
  }
];

function Resources() {
  return (
    <div>
      <h2>Resources</h2>
      {resources.map(resource => (
        <div key={resource.title}>
          <h3>{resource.title}</h3>
          <img src={resource.imageUrl} alt={resource.title} style={{ width: '100px' }} />
          <p>{resource.summary}</p>
          <a href={resource.link} target="_blank" rel="noopener noreferrer">Visit Resource</a>
        </div>
      ))}
    </div>
  );
}

export default Resources;
