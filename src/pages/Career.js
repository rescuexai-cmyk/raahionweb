import React from 'react';
import './Pages.css';

const Career = () => {
  return (
    <div className="page career-page">
      <section className="page-hero-split">
        <div className="page-hero-split-content">
          <h1 className="page-title">We’re Hiring Soon</h1>
          <p className="page-subtitle">
            Raahi is building India's unified mobility platform. Job openings will be listed here soon.
          </p>
          <p className="page-hero-para">
            If you’re passionate about transport and technology, we’d love to hear from you. In the meantime, share your resume and we’ll connect if there’s a match.
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
          <h2 className="section-title">Job Openings</h2>

          <div className="no-results">
            <h3>Coming Soon</h3>
            <p>
              We’re finalizing roles as Raahi scales. New job openings will be posted here shortly.
            </p>
          </div>
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
