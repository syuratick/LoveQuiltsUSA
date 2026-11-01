import { useState } from 'react';
import contactChild from '../assets/images/contact-child.svg';
import loveHeart from '../assets/images/love-heart.svg';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up form submission
    console.log('Form submitted:', form);
  };

  return (
    <section className="contact-section">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left – form */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="contact-heading">Warm &amp; Supportive</h2>
            <p className="contact-intro">
              We're here to support you. Contact Love Quilts USA with any
              questions about quilts, volunteering, or our mission.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-field">
                <label htmlFor="contact-name" className="contact-label">
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="contact-input"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email" className="contact-label">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="contact-input"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message" className="contact-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact-textarea"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-contact-submit">
                Request a Quilt from Love Quilts USA &rarr;
              </button>
            </form>
          </div>

          {/* Right – image with heart accent */}
          <div className="col-lg-6">
            <div className="contact-image-wrapper">
              <img
                className="contact-heart-accent"
                src={loveHeart}
                alt=""
                aria-hidden="true"
              />
              <img
                className="contact-img"
                src={contactChild}
                alt="Child holding a stuffed toy in hospital"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
