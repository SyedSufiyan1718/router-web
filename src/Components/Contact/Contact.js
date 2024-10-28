import React from "react";
import './Contact.css'

function Contact() {
  return (
    <section className="contact">
      <div>
      <h1>Contact Us</h1>
      <p>
        <strong>We’d Love to Hear from You!</strong>
      </p>
      <p>
        At GradientGenius, your feedback and inquiries are important to us.
        Whether you have questions about our gradient generator, suggestions for
        new features, or just want to say hello, we’re here to help! Our
        dedicated team is ready to assist you with any queries you may have.
      </p>

      <h2>Get in Touch</h2>
      <ul>
        <li>
          <strong>Email</strong>: Reach us at
          <a href="mailto:support@gradientgenius.com">
            {" "}
            support@gradientgenius.com
          </a>{" "}
          for any support or general inquiries. We strive to respond to all
          messages within 24 hours.
        </li>
        <li>
          <strong>Social Media</strong>: Connect with us on our social media
          platforms for updates, tips, and inspiration. Follow us on:
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagrame</li>
          </ul>
        </li>
      </ul>
      <h2>Feedback Form</h2>
      <p>
        We value your thoughts! Please fill out the form below with your
        comments, suggestions, or questions, and we’ll get back to you as soon
        as possible.
      </p>
      </div>

     
    </section>
  );
}

export default Contact;
