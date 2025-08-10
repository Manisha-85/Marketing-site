import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Get in Touch</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Email" required />
          </div>
          <div className="col-12">
            <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
