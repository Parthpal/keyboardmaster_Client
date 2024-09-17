// ContactUs.tsx
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section className="min-h-screen bg-base-200 text-base-content py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">
          Contact Us
        </h1>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Contact Information */}
          <div className="animate-slide-left">
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">
              We love to hear from you! Whether you have a question about our products, need support, or just want to give us feedback, feel free to reach out.
            </p>
            <ul className="list-none mb-4">
              <li className="mb-2">
                <strong>Phone:</strong> +123-456-7890
              </li>
              <li className="mb-2">
                <strong>Email:</strong> support@keyboardMaster.com
              </li>
              <li className="mb-2">
                <strong>Address:</strong> 123 Keyboard St, Typing City, Tech Land
              </li>
            </ul>
            <p className="mb-4">
              Follow us on social media for the latest updates and offers!
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="btn btn-circle btn-primary hover:scale-110 transition-transform duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="btn btn-circle btn-primary hover:scale-110 transition-transform duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="btn btn-circle btn-primary hover:scale-110 transition-transform duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card shadow-lg bg-base-100 p-6 animate-slide-right">
            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" placeholder="Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input type="email" placeholder="Your Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea placeholder="Your Message" className="textarea textarea-bordered h-24" required></textarea>
              </div>
              <div className="form-control">
                <button className="btn btn-primary hover:scale-105 transition-transform duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
