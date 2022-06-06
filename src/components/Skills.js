import React from 'react';
import skillz from "./skillz.css";

function Skills() {
  return (
     <div className="Container2"  >
        
          <h1 className="headingSkills">WHY ME?</h1>
      
        <div className="skill-item">
          <h6>Typing Speed</h6>
          <div className='skill-bar'>
            <span>95%</span>
              <div className='filled-bar-fill bar-1'></div>
           </div>
        </div>
        <div className="skill-item">
          <h6>HTML/CSS</h6>
          <div className='skill-bar'>
            <span>80%</span>
              <div className='filled-bar-fill bar-2'></div>
           </div>
        </div>
        <div className="skill-item">
          <h6>React/Mongodb</h6>
          <div className='skill-bar'>
            <span>65%</span>
              <div className='filled-bar-fill bar-3'></div>
           </div>
        </div>
        <div className="skill-item">
          <h6 >API Management</h6>
          <div className='skill-bar'>
            <span>50%</span>
              <div className='filled-bar-fill bar-4'></div>
           </div>
        </div>
           
        </div>
  )
}

export default Skills