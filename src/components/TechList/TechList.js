import React from 'react';

function TechList() {
  return (
    <div>
      <h1>My <span>Skills</span></h1>
      <section>
        <div className="container">
          <h1>Technical Skills</h1>
          <div>
            <div><i style={{color:"#E44D26"}}></i><span>HTML</span></div>
            <div><i style={{color: "#a349b9"}}></i><span>CSS</span></div>
            <div><i style={{color: "#F7DF1E"}}></i><span>JavaScript</span></div>
            <div><i style={{color: "#3776AB"}}></i><span>Python</span></div>
            <div><i style={{color: "#61DAFB"}}></i><span>React</span></div>
          </div>
        </div>
        <div className="container">
          <h1>Professional Skills</h1>
          <div>
            <div><span>Creativity - 90%</span></div>
            <div><span>Communication - 95%</span></div>
            <div><span>Problem Solving - 85%</span></div>
            <div><span>Teamwork - 90%</span></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechList;
