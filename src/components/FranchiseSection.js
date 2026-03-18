import React, { useState } from 'react';
import './FranchiseSection.css';
import { useLanguage } from '../context/LanguageContext';

const FranchiseSection = () => {
  const { t } = useLanguage();
  const { label, title, intro, whatYouGet, about1, about2 } = t.franchise;

  const [formValues, setFormValues] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    incomeGroup: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
    setSubmitted(false);
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.name.trim()) newErrors.name = 'First name is required';
    if (!formValues.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formValues.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formValues.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s]{7,15}$/.test(formValues.phone)) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!formValues.location.trim()) newErrors.location = 'Location is required';
    if (!formValues.incomeGroup.trim()) newErrors.incomeGroup = 'Income group is required';
    if (!formValues.message.trim()) newErrors.message = 'This field is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const subject = encodeURIComponent('Franchise enquiry from Raahi website');
    const bodyLines = [
      `First name: ${formValues.name}`,
      `Last name: ${formValues.lastName}`,
      `Email: ${formValues.email}`,
      `Phone: ${formValues.phone}`,
      `Location: ${formValues.location}`,
      `Income group: ${formValues.incomeGroup}`,
      '',
      `Additional details: ${formValues.message}`,
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    window.location.href = `mailto:contactus@raahionrescue.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="franchise-section" id="franchise-partner">
      <div className="franchise-section-container">
        <div className="franchise-section-layout">
          <div className="franchise-left-card">
            <p className="franchise-section-label">{label}</p>
            <h2 className="franchise-section-title">{title}</h2>
            <p className="franchise-section-intro">{intro}</p>

            <div className="franchise-highlight">
              <p className="franchise-highlight-eyebrow">{whatYouGet}</p>
              <p className="franchise-highlight-body">{about1}</p>
            </div>

            <p className="franchise-section-about-text">
              <strong>{about2}</strong>
            </p>
          </div>

          <div className="franchise-form-wrapper">
            <h3 className="franchise-form-title">Share below details to join us</h3>
            <form className="franchise-form" onSubmit={handleSubmit} noValidate>
              <div className="franchise-form-row">
                <div className="franchise-form-field">
                  <label htmlFor="franchise-name">First name</label>
                  <input
                    id="franchise-name"
                    name="name"
                    type="text"
                    value={formValues.name}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                  />
                  {errors.name && <p className="franchise-error">{errors.name}</p>}
                </div>
                <div className="franchise-form-field">
                  <label htmlFor="franchise-last-name">Last name</label>
                  <input
                    id="franchise-last-name"
                    name="lastName"
                    type="text"
                    value={formValues.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <p className="franchise-error">{errors.lastName}</p>}
                </div>
              </div>

              <div className="franchise-form-row">
                <div className="franchise-form-field">
                  <label htmlFor="franchise-email">Email</label>
                  <input
                    id="franchise-email"
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="franchise-error">{errors.email}</p>}
                </div>
                <div className="franchise-form-field">
                  <label htmlFor="franchise-phone">Phone number</label>
                  <input
                    id="franchise-phone"
                    name="phone"
                    type="tel"
                    value={formValues.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <p className="franchise-error">{errors.phone}</p>}
                </div>
              </div>

              <div className="franchise-form-row">
                <div className="franchise-form-field">
                  <label htmlFor="franchise-location">Location</label>
                  <input
                    id="franchise-location"
                    name="location"
                    type="text"
                    value={formValues.location}
                    onChange={handleChange}
                    placeholder="Enter your location (city or region)"
                  />
                  {errors.location && <p className="franchise-error">{errors.location}</p>}
                </div>
                <div className="franchise-form-field">
                  <label htmlFor="franchise-income-group">Income group</label>
                  <select
                    id="franchise-income-group"
                    name="incomeGroup"
                    value={formValues.incomeGroup}
                    onChange={handleChange}
                  >
                    <option value="">Select income group</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                  {errors.incomeGroup && <p className="franchise-error">{errors.incomeGroup}</p>}
                </div>
              </div>

              <div className="franchise-form-row">
                <div className="franchise-form-field">
                  <label htmlFor="franchise-message">Anything else</label>
                  <textarea
                    id="franchise-message"
                    name="message"
                    rows="3"
                    value={formValues.message}
                    onChange={handleChange}
                    placeholder="Share city, fleet size, or any notes."
                  />
                  {errors.message && <p className="franchise-error">{errors.message}</p>}
                </div>
              </div>

              <button type="submit" className="btn btn-gold franchise-submit-btn">
                Send
              </button>
              {submitted && (
                <p className="franchise-success">
                  Opening your email app to send details to contactus@raahionrescue.com.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
