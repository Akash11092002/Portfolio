import React from 'react';
import './Services.css';
import Services_Data from '../../assets/Service';

const Services = () => {
  // Log the services data to verify it's correctly imported


  // Check if Services_Data is an array and has elements
  

  return (
    <section  id='services'  className='services'>
      <header className='services-title'>
        <h1>My Services</h1>
      </header>
      <div className='services-container'>
        {Services_Data.map((service, index) => (
          <article key={index} className='services-format'>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className='services-readmore'>
          
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
