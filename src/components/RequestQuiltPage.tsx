import { useState } from 'react';
import topBanner from '../assets/images/top-banner.svg';

const RequestQuiltPage = () => {
  const [form, setForm] = useState({
    childName: '',
    birthdate: '',
    mainDiagnosis: '',
    diagnosisDate: '',
    otherDiagnosis: '',
    webpageLink: '',
    interests: '',
    fatherName: '',
    motherName: '',
    homeAddress: '',
    cityStateZip: '',
    mailingAddress: '',
    homePhone: '',
    cellPhone: '',
    email: '',
    alternateEmail: '',
    submittedBy: '',
    howHeard: '',
    receivedQuiltBefore: '',
    biography: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up API submission
    console.log('Request Quilt submitted:', form);
  };

  return (
    <main className="signup-page">
      {/* Banner */}
      <div className="signup-banner">
        <img
          className="signup-banner-img"
          src={topBanner}
          alt="Request a Quilt banner"
        />
        <div className="signup-banner-overlay">
          <h1 className="signup-banner-title">Request A Quilt</h1>
        </div>
      </div>

      {/* Form card */}
      <div className="container">
        <div className="signup-card">
          <div className="text-center mb-4">
            <h2 className="signup-intro-heading">
              Apply for a handmade quilt for your child from Love Quilts USA.
            </h2>
            <p className="signup-intro-text">
              Please fill out all required fields below. All information is required unless it does
              not apply to your family. Please put N/A in the boxes that do not apply. This form
              must be complete to be considered for a quilt.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Child's Information */}
            <h3 className="signup-section-title">Child's Information</h3>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="signup-label">
                  Full name of child <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="childName"
                  className="signup-input"
                  placeholder="Enter child's full name"
                  value={form.childName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="signup-label">
                  Birthdate (Child must be between 3 and 18) <span className="required">*</span>
                </label>
                <input
                  type="date"
                  name="birthdate"
                  className="signup-input"
                  value={form.birthdate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="signup-label">
                  Main Diagnosis (Please use medical terms) <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="mainDiagnosis"
                  className="signup-input"
                  placeholder="Do not list a webpage address here"
                  value={form.mainDiagnosis}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="signup-label">
                  Date of Diagnosis <span className="required">*</span>
                </label>
                <input
                  type="date"
                  name="diagnosisDate"
                  className="signup-input"
                  value={form.diagnosisDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className="signup-label">Other Diagnosis</label>
                <input
                  type="text"
                  name="otherDiagnosis"
                  className="signup-input"
                  placeholder="Any additional diagnoses"
                  value={form.otherDiagnosis}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label className="signup-label">
                  Link for Webpage for child giving updates on condition (Facebook, Caringbridge, etc.) <span className="required">*</span>
                </label>
                <input
                  type="url"
                  name="webpageLink"
                  className="signup-input"
                  placeholder="https://..."
                  value={form.webpageLink}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Quilt Request */}
            <h3 className="signup-section-title">Quilt Request</h3>
            <div className="row g-3 mb-4">
              <div className="col-12">
                <label className="signup-label">
                  Child's Interests and Favorite Color <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="interests"
                  className="signup-input"
                  placeholder="e.g., Dinosaurs, Blue, Minecraft"
                  value={form.interests}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Family's Information */}
            <h3 className="signup-section-title">Family's Information</h3>
            <p className="signup-intro-text text-start mb-3" style={{ maxWidth: '100%' }}>
              All information below will be kept private.
            </p>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="signup-label">
                  Full Name of Father <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="fatherName"
                  className="signup-input"
                  placeholder="Father's full name"
                  value={form.fatherName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="signup-label">
                  Full Name of Mother <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="motherName"
                  className="signup-input"
                  placeholder="Mother's full name"
                  value={form.motherName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="signup-label">
                  Home Address <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="homeAddress"
                  className="signup-input"
                  placeholder="Street address"
                  value={form.homeAddress}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="signup-label">
                  City, State and Zipcode <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="cityStateZip"
                  className="signup-input"
                  placeholder="City, ST 12345"
                  value={form.cityStateZip}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className="signup-label">
                  Address where quilt should be mailed (if different than above)
                </label>
                <input
                  type="text"
                  name="mailingAddress"
                  className="signup-input"
                  placeholder="Leave blank if same as above"
                  value={form.mailingAddress}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="signup-label">
                  Home Phone <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  name="homePhone"
                  className="signup-input"
                  placeholder="Home phone number"
                  value={form.homePhone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="signup-label">Cell Phone</label>
                <input
                  type="tel"
                  name="cellPhone"
                  className="signup-input"
                  placeholder="Cell phone number"
                  value={form.cellPhone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="signup-label">
                  Correct Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="signup-input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="signup-label">Alternate Email Address</label>
                <input
                  type="email"
                  name="alternateEmail"
                  className="signup-input"
                  placeholder="alternate@email.com"
                  value={form.alternateEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="signup-label">
                  Form Submitted By (Must be Parent or Legal Guardian) <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="submittedBy"
                  className="signup-input"
                  placeholder="Your full name"
                  value={form.submittedBy}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="signup-label">
                  How Did You Hear About Love Quilts USA? <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="howHeard"
                  className="signup-input"
                  placeholder="e.g., Facebook, friend, hospital"
                  value={form.howHeard}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className="signup-label">
                  Has your child received a quilt from another group online or locally? <span className="required">*</span>
                </label>
                <div className="d-flex gap-3 mt-1">
                  <label className="signup-checkbox-label">
                    <input
                      type="radio"
                      name="receivedQuiltBefore"
                      value="Yes"
                      checked={form.receivedQuiltBefore === 'Yes'}
                      onChange={handleChange}
                      required
                    />
                    <span className="signup-checkbox-text">Yes</span>
                  </label>
                  <label className="signup-checkbox-label">
                    <input
                      type="radio"
                      name="receivedQuiltBefore"
                      value="No"
                      checked={form.receivedQuiltBefore === 'No'}
                      onChange={handleChange}
                    />
                    <span className="signup-checkbox-text">No</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Biography */}
            <h3 className="signup-section-title">Biography of Child</h3>
            <p className="signup-intro-text text-start mb-3" style={{ maxWidth: '100%' }}>
              Begin story from onset signs of illness, diagnosis and what he/she has been through
              until today. Please write at least three paragraphs. This information will be posted
              on the Love Quilts USA webpage created for your child. If you have another site where
              your child is already featured such as Facebook and there is a full bio listed, please
              direct us to that site.
            </p>
            <div className="mb-4">
              <label className="signup-label">
                Biography <span className="required">*</span>
              </label>
              <textarea
                name="biography"
                className="signup-textarea"
                rows={8}
                placeholder="Write at least three paragraphs about your child's journey..."
                value={form.biography}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit */}
            <div className="text-center mt-4">
              <button type="submit" className="btn-signup-submit">
                Submit Quilt Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default RequestQuiltPage;
