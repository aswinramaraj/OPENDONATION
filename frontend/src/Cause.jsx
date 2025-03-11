import React, { forwardRef } from 'react';
import './cause.css';

const Cause = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="cause-container">
      <h2>Our Causes</h2>
      <p>
        We are dedicated to supporting various causes such as education, healthcare, and environmental sustainability.
      </p>
      <div className="cause-list">
        <div className="cause-item">
          <h3>Education for All</h3>
          <p>Helping underprivileged children access quality education.</p>
        </div>
        <div className="cause-item">
          <h3>Healthcare Initiatives</h3>
          <p>Providing medical aid to those in need.</p>
        </div>
        <div className="cause-item">
          <h3>Environmental Sustainability</h3>
          <p>Promoting eco-friendly practices and conservation efforts.</p>
        </div>
      </div>
    </div>
  );
});

export default Cause;