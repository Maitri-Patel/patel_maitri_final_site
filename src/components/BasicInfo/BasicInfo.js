import React from 'react';
import profileImage from '../../assets/images/profile.jpg';  

function BasicInfo() {
  return (
    <div>
      <h1>Maitri Patel</h1>
      <p>I am Maitri Patel from Ahmedabad, Gujarat My journey in the world of development began with HTML and CSS, where I learned the art of crafting beautiful and responsive user interfaces. As I delved deeper, I mastered JavaScript, enabling me to bring interactivity and life to web pages.</p>
      <img src={profileImage} alt="Your Portrait" style={{ width: '200px' }} />
      <p>Email: pmaitri574@gmail.com</p>
    </div>
  );
}

export default BasicInfo;
