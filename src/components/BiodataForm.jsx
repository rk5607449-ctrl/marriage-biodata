import { useState } from 'react'
import '../styles/BiodataForm.css'

function BiodataForm({ onFormChange, initialData = {} }) {
  const [formData, setFormData] = useState(initialData || {
    // Personal Details
    fullName: '',
    gender: 'Male',
    dob: '',
    timeOfBirth: '',
    placeOfBirth: '',
    height: '',
    weight: '',
    complexion: '',
    religion: '',
    caste: '',
    motherTongue: '',
    maritalStatus: 'Never Married',
    
    // Contact Details
    mobile: '',
    whatsapp: '',
    email: '',
    city: '',
    state: '',
    
    // Education
    education: '',
    college: '',
    
    // Profession
    occupation: '',
    company: '',
    jobLocation: '',
    income: '',
    
    // Family
    fatherName: '',
    fatherOccupation: '',
    motherName: '',
    motherOccupation: '',
    brothers: '',
    sisters: '',
    familyType: '',
    familyLocation: '',
    
    // Additional
    aboutMe: '',
    hobbies: '',
    partnerPreferences: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    const newData = { ...formData, [name]: value }
    setFormData(newData)
    onFormChange(newData)
    
    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required'
    if (formData.mobile && !/^[0-9]{10}$/.test(formData.mobile.replace(/[^0-9]/g, ''))) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number'
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return (
    <form className="biodata-form">
      {/* Personal Details */}
      <section className="form-section">
        <h2>Personal Details</h2>
        
        <div className="form-grid-2">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              className={errors.fullName ? 'error' : ''}
            />
            {errors.fullName && <span className="error-text">{errors.fullName}</span>}
          </div>
          
          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Time of Birth</label>
            <input
              type="time"
              name="timeOfBirth"
              value={formData.timeOfBirth}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>Place of Birth</label>
            <input
              type="text"
              name="placeOfBirth"
              value={formData.placeOfBirth}
              onChange={handleChange}
              placeholder="City/Town"
            />
          </div>

          <div className="form-group">
            <label>Height</label>
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleChange}
              placeholder="e.g., 5'6\""
            />
          </div>

          <div className="form-group">
            <label>Weight (kg)</label>
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="e.g., 65"
            />
          </div>

          <div className="form-group">
            <label>Complexion</label>
            <select name="complexion" value={formData.complexion} onChange={handleChange}>
              <option value="">Select</option>
              <option>Fair</option>
              <option>Very Fair</option>
              <option>Wheatish</option>
              <option>Wheatish Brown</option>
              <option>Dark</option>
            </select>
          </div>

          <div className="form-group">
            <label>Religion</label>
            <select name="religion" value={formData.religion} onChange={handleChange}>
              <option value="">Select</option>
              <option>Hindu</option>
              <option>Muslim</option>
              <option>Christian</option>
              <option>Sikh</option>
              <option>Buddhist</option>
              <option>Jain</option>
            </select>
          </div>

          <div className="form-group">
            <label>Caste</label>
            <input
              type="text"
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              placeholder="Enter caste"
            />
          </div>

          <div className="form-group">
            <label>Mother Tongue</label>
            <input
              type="text"
              name="motherTongue"
              value={formData.motherTongue}
              onChange={handleChange}
              placeholder="e.g., Hindi, Tamil"
            />
          </div>

          <div className="form-group">
            <label>Marital Status</label>
            <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
              <option>Never Married</option>
              <option>Divorced</option>
              <option>Widowed</option>
              <option>Separated</option>
            </select>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="form-section">
        <h2>Contact Details</h2>
        
        <div className="form-grid-2">
          <div className="form-group">
            <label>Mobile Number *</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              className={errors.mobile ? 'error' : ''}
            />
            {errors.mobile && <span className="error-text">{errors.mobile}</span>}
          </div>

          <div className="form-group">
            <label>WhatsApp Number</label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="10-digit WhatsApp number"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Current City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
            />
          </div>

          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter state"
            />
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="form-section">
        <h2>Education</h2>
        
        <div className="form-grid-2">
          <div className="form-group">
            <label>Highest Qualification</label>
            <select name="education" value={formData.education} onChange={handleChange}>
              <option value="">Select</option>
              <option>10th Pass</option>
              <option>12th Pass</option>
              <option>Diploma</option>
              <option>Bachelor's Degree</option>
              <option>Master's Degree</option>
              <option>PhD/Doctorate</option>
              <option>Professional Degree</option>
            </select>
          </div>

          <div className="form-group">
            <label>College/University</label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              placeholder="Name of institution"
            />
          </div>
        </div>
      </section>

      {/* Profession */}
      <section className="form-section">
        <h2>Profession</h2>
        
        <div className="form-grid-2">
          <div className="form-group">
            <label>Occupation</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              placeholder="e.g., Software Engineer, Doctor"
            />
          </div>

          <div className="form-group">
            <label>Company/Business</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company or business name"
            />
          </div>

          <div className="form-group">
            <label>Job Location</label>
            <input
              type="text"
              name="jobLocation"
              value={formData.jobLocation}
              onChange={handleChange}
              placeholder="City of work"
            />
          </div>

          <div className="form-group">
            <label>Annual Income</label>
            <input
              type="text"
              name="income"
              value={formData.income}
              onChange={handleChange}
              placeholder="e.g., 5-10 LPA"
            />
          </div>
        </div>
      </section>

      {/* Family Details */}
      <section className="form-section">
        <h2>Family Details</h2>
        
        <div className="form-grid-2">
          <div className="form-group">
            <label>Father's Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Father's name"
            />
          </div>

          <div className="form-group">
            <label>Father's Occupation</label>
            <input
              type="text"
              name="fatherOccupation"
              value={formData.fatherOccupation}
              onChange={handleChange}
              placeholder="Father's occupation"
            />
          </div>

          <div className="form-group">
            <label>Mother's Name</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              placeholder="Mother's name"
            />
          </div>

          <div className="form-group">
            <label>Mother's Occupation</label>
            <input
              type="text"
              name="motherOccupation"
              value={formData.motherOccupation}
              onChange={handleChange}
              placeholder="Mother's occupation"
            />
          </div>

          <div className="form-group">
            <label>Number of Brothers</label>
            <input
              type="number"
              name="brothers"
              value={formData.brothers}
              onChange={handleChange}
              placeholder="0"
              min="0"
            />
          </div>

          <div className="form-group">
            <label>Number of Sisters</label>
            <input
              type="number"
              name="sisters"
              value={formData.sisters}
              onChange={handleChange}
              placeholder="0"
              min="0"
            />
          </div>

          <div className="form-group">
            <label>Family Type</label>
            <select name="familyType" value={formData.familyType} onChange={handleChange}>
              <option value="">Select</option>
              <option>Joint</option>
              <option>Nuclear</option>
            </select>
          </div>

          <div className="form-group">
            <label>Family Location</label>
            <input
              type="text"
              name="familyLocation"
              value={formData.familyLocation}
              onChange={handleChange}
              placeholder="City/State"
            />
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="form-section">
        <h2>Additional Information</h2>
        
        <div className="form-grid-1">
          <div className="form-group full-width">
            <label>About Me</label>
            <textarea
              name="aboutMe"
              value={formData.aboutMe}
              onChange={handleChange}
              placeholder="Tell about yourself in 100-200 words"
              rows="4"
            />
          </div>

          <div className="form-group full-width">
            <label>Hobbies & Interests</label>
            <textarea
              name="hobbies"
              value={formData.hobbies}
              onChange={handleChange}
              placeholder="List your hobbies and interests (e.g., Reading, Traveling, Music)"
              rows="3"
            />
          </div>

          <div className="form-group full-width">
            <label>Partner Preferences</label>
            <textarea
              name="partnerPreferences"
              value={formData.partnerPreferences}
              onChange={handleChange}
              placeholder="Describe your ideal partner and what you're looking for"
              rows="4"
            />
          </div>
        </div>
      </section>
    </form>
  )
}

export default BiodataForm
