import React, { useState } from 'react';
import './Pages.css';

const departments = [
  'All Departments',
  'Engineering',
  'Product',
  'Design',
  'Operations',
  'Marketing',
  'Customer Support',
  'Finance'
];

const locations = [
  'All Locations',
  'Bangalore',
  'Delhi NCR',
  'Mumbai',
  'Hyderabad',
  'Chennai',
  'Remote'
];

const jobOpenings = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '5+ years'
  },
  {
    id: 2,
    title: 'Backend Engineer - Payments',
    department: 'Engineering',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '3+ years'
  },
  {
    id: 3,
    title: 'Product Manager - Driver Experience',
    department: 'Product',
    location: 'Delhi NCR',
    type: 'Full-time',
    experience: '4+ years'
  },
  {
    id: 4,
    title: 'UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years'
  },
  {
    id: 5,
    title: 'City Operations Manager',
    department: 'Operations',
    location: 'Mumbai',
    type: 'Full-time',
    experience: '5+ years'
  },
  {
    id: 6,
    title: 'Growth Marketing Lead',
    department: 'Marketing',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '4+ years'
  },
  {
    id: 7,
    title: 'Data Analyst',
    department: 'Engineering',
    location: 'Hyderabad',
    type: 'Full-time',
    experience: '2+ years'
  },
  {
    id: 8,
    title: 'Customer Support Lead',
    department: 'Customer Support',
    location: 'Chennai',
    type: 'Full-time',
    experience: '3+ years'
  }
];

const Career = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === 'All Departments' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All Locations' || job.location === selectedLocation;
    return matchesDepartment && matchesLocation;
  });

  return (
    <div className="page career-page">
      <section className="page-hero-split">
        <div className="page-hero-split-content">
          <h1 className="page-title">Join Our Team</h1>
          <p className="page-subtitle">
            Help us build the future of transportation in India — be part of the mobility revolution.
          </p>
          <p className="page-hero-para">
            We're building India's unified mobility platform: ride-hailing, intercity travel, and traffic rescue in one place. Every role here shapes how millions will move. You'll work with a small, driven team, own real problems, and see your impact from day one.
          </p>
          <p className="page-hero-tagline">
            Raahi is new — we're handpicking talent to build this from the ground up.
          </p>
        </div>
        <div className="page-hero-split-image">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Raahi team" />
        </div>
      </section>

      <section className="jobs-section">
        <div className="container">
          <h2 className="section-title">Open Positions</h2>
          
          <div className="job-filters">
            <select 
              value={selectedDepartment} 
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="filter-select"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            
            <select 
              value={selectedLocation} 
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="filter-select"
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div className="jobs-list">
            {filteredJobs.map(job => (
              <div key={job.id} className="job-card">
                <div className="job-info">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-tag">{job.department}</span>
                    <span className="job-tag">{job.location}</span>
                    <span className="job-tag">{job.type}</span>
                    <span className="job-tag">{job.experience}</span>
                  </div>
                </div>
                <button className="btn btn-gold">Apply Now</button>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="no-results">
              <h3>No positions found</h3>
              <p>Try adjusting your filters or check back later</p>
            </div>
          )}
        </div>
      </section>

      <section className="culture-section">
        <div className="container">
          <div className="culture-content">
            <h2>Life at Raahi</h2>
            <p>
              We're building more than just an app — we're creating a movement that 
              transforms how India travels. Our team is passionate, diverse, and 
              committed to making a real impact in people's lives every day.
            </p>
            <p>
              Whether you're an engineer solving complex routing problems, a designer 
              crafting seamless experiences, or an operations expert ensuring smooth 
              rides across cities — you'll find meaningful work here.
            </p>
            <button className="btn btn-outline">Learn More About Our Culture</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
