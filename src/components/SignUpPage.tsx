import { useState } from 'react';
import topBanner from '../assets/images/sign-up.svg';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
  'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
  'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming',
];

const SignUpPage = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    childName: '',
    designTheme: '',
    completionDate: '',
    designDescription: '',
    designSize: '',
    additionalInfo: '',
  });

  const [agreements, setAgreements] = useState({
    followDirections: false,
    noLongStitches: false,
    noBeads: false,
    includeNote: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreements({ ...agreements, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up API submission
    console.log('Sign up submitted:', { ...form, agreements });
  };

  return (
    <main className="signup-page">
      {/* Banner */}
      <div className="signup-banner">
        <img
          className="signup-banner-img"
          src={topBanner}
          alt="Volunteer stitcher banner"
        />
        <div className="signup-banner-overlay">
          <h1 className="signup-banner-title">Volunteer Stitcher Sign-Up</h1>
        </div>
      </div>

      {/* Form card */}
      <div className="container">
        <div className="signup-card">
          <div className="text-center mb-4">
            <h2 className="signup-intro-heading">
              Join our global community of volunteers. By stitching a single
              square, you help create a lifetime of comfort for a child in need.
            </h2>
            <p className="signup-intro-text">
              Please fill out all required fields below to register for a specific
              quilt project. Your dedication makes these gifts possible! Organize
              your integrated form into logical groups to make it less overwhelming
              than a single long list.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <h3 className="signup-section-title">Personal Information</h3>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="signup-label">
                  Full Name <span className="required">(Required)</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  className="signup-input"
                  placeholder="e.g., Jane Doe"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="signup-label">
                  Email Address <span className="required">(Required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="signup-input"
                  placeholder="e.g., name@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="signup-label">
                  Phone Number <span className="required">(Required)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="signup-input"
                  placeholder="e.g., +1234 *** ***"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="signup-label">
                  State/Province <span className="optional">(Optional)</span>
                </label>
                <select
                  name="state"
                  className="signup-select"
                  value={form.state}
                  onChange={handleChange}
                >
                  <option value="">Select Here</option>
                  {US_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Assignment */}
            <h3 className="signup-section-title">Project Assignment</h3>
            <div className="row g-3 mb-3">
              <div className="col-md-4">
                <label className="signup-label">Child's Name</label>
                <input
                  type="text"
                  name="childName"
                  className="signup-input"
                  placeholder="Enter the name of the child..."
                  value={form.childName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="signup-label">Design Theme</label>
                <input
                  type="text"
                  name="designTheme"
                  className="signup-input"
                  placeholder="e.g., Dinosaurs, Blue Flowers, Disney"
                  value={form.designTheme}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label className="signup-label">Expected Completion Date (Due Date)</label>
                <input
                  type="date"
                  name="completionDate"
                  className="signup-input"
                  value={form.completionDate}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="signup-label">Design Description</label>
              <textarea
                name="designDescription"
                className="signup-textarea"
                rows={4}
                placeholder="Describe the colors or specific pattern you are using"
                value={form.designDescription}
                onChange={handleChange}
              />
            </div>

            {/* Technical Details */}
            <h3 className="signup-section-title">Technical Details (For Quality Control)</h3>
            <div className="mb-3">
              <label className="signup-label">Design Size</label>
              <select
                name="designSize"
                className="signup-select"
                value={form.designSize}
                onChange={handleChange}
              >
                <option value="">e.g., 6" x 6" (Must be between 6" and 9")</option>
                <option value="6x6">6" x 6"</option>
                <option value="7x7">7" x 7"</option>
                <option value="8x8">8" x 8"</option>
                <option value="9x9">9" x 9"</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="signup-label">Additional Information</label>
              <textarea
                name="additionalInfo"
                className="signup-textarea"
                rows={4}
                placeholder="Any special details or questions for our coordinators?"
                value={form.additionalInfo}
                onChange={handleChange}
              />
            </div>

            {/* Essential Stitcher Agreement */}
            <h3 className="signup-section-title">Essential Stitcher Agreement</h3>
            <p className="signup-agreement-text">
              Should agree to the care rules from your "Directions for Stitchers"
              to ensure the quilt is safe for children:
            </p>

            <div className="signup-checkboxes">
              <label className="signup-checkbox-label">
                <input
                  type="checkbox"
                  name="followDirections"
                  checked={agreements.followDirections}
                  onChange={handleCheckbox}
                />
                <span className="signup-checkbox-text">
                  I have read and will follow the (Full Directions for Stitchers)
                </span>
              </label>
              <label className="signup-checkbox-label">
                <input
                  type="checkbox"
                  name="noLongStitches"
                  checked={agreements.noLongStitches}
                  onChange={handleCheckbox}
                />
                <span className="signup-checkbox-text">
                  I will not use "long stitches" unless they are properly couched.
                </span>
              </label>
              <label className="signup-checkbox-label">
                <input
                  type="checkbox"
                  name="noBeads"
                  checked={agreements.noBeads}
                  onChange={handleCheckbox}
                />
                <span className="signup-checkbox-text">
                  I will not add beads, charms, or religious content to the square.
                </span>
              </label>
              <label className="signup-checkbox-label">
                <input
                  type="checkbox"
                  name="includeNote"
                  checked={agreements.includeNote}
                  onChange={handleCheckbox}
                />
                <span className="signup-checkbox-text">
                  I will include a note with my name, email, and the child's name when mailing.
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className="text-center mt-4">
              <button type="submit" className="btn-signup-submit">
                Submit My Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
