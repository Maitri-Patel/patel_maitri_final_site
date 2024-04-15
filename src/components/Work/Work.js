import React from 'react';
import project1Image from '../../assets/images/project1.png';
import project2Image from '../../assets/images/project2.png';
import project3Image from '../../assets/images/project3.png';

const projects = [
  {
    title: "FlavlourFul Shares",
    description: "Created a dynamic CMS using PHP and MySQL for effective content management. Still developing this.",
    imageUrl: project1Image,
    link: "#"  // Update this link if it becomes live
  },
  {
    title: "Harry Poters Characters",
    description: "Build a small React project using harry potter api to display character images and info",
    imageUrl: project2Image,
    link: "https://jlmsj9.csb.app/"
  },
  {
    title: "Bliss Water World",
    description: "This is my first website using HTML, CSS, and Js. Very small but responsive and functional.",
    imageUrl: project3Image,
    link: "https://patelmaitu.github.io/new-website/index.html"
  }
];

function Work() {
  return (
    <div>
      <h2>Latest <span>Projects</span></h2>
      <h3>Have some look at my small projects</h3>
      {projects.map(project => (
        <div key={project.title}>
          <img src={project.imageUrl} alt={project.title} style={{ width: '350px' }} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  );
}

export default Work;
