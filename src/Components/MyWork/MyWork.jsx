import React, { useState } from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (index) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <div id='work' className='mywork'>
      <div className='mywork-title'>
        <h1>My Latest Work</h1>
      </div>
      <div className='mywork-container'>
        {mywork_data.map((work, index) => (
          <div key={index} className={`mywork-item ${selectedProject === index ? 'show-details' : ''}`}>
            {selectedProject === index ? (
              <div className='mywork-details'>
                <h2>{work.w_title}</h2>
                <p>{work.w_desc}</p>
                <button onClick={() => handleImageClick(null)}>Close</button>
              </div>
            ) : (
              <img 
                src={work.w_img} 
                alt={`Project ${index + 1}`} 
                onClick={() => handleImageClick(index)} 
                className='mywork-image' 
              />
            )}
          </div>
        ))}
      </div>
      <div className='mywork-showmore'>
      
      </div>
    </div>
  );
};

export default MyWork;
