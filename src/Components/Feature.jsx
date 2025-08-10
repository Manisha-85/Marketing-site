import React from 'react';

function Features() {
  return (
    <section id="features" className="container py-5">
      <h2 className="text-center mb-4">Key Features</h2>
      <div className="row">
        <div className="col-md-4 text-center">
          <i className="bi bi-lightning-charge-fill fs-1 text-primary"></i>
          <h4>Fast Performance</h4>
          <p>Experience lightning-fast response time and smooth UX.</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-lock-fill fs-1 text-primary"></i>
          <h4>Secure</h4>
          <p>We use military-grade encryption for your data safety.</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="bi bi-gear-fill fs-1 text-primary"></i>
          <h4>Customizable</h4>
          <p>Tailor TechX to suit your business needs effortlessly.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
