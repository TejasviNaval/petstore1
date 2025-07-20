import React from 'react';
import '../App.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Us!</span></h2>
      <form>
        <div className="input-box">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Mobile Number" />
          <input type="text" placeholder="Email Subject" />
        </div>
        <textarea placeholder="Your Message"></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
}
export default Contact;
