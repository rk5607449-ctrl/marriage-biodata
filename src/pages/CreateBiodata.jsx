import { useState } from 'react'
import BiodataForm from '../components/BiodataForm'
import PhotoUpload from '../components/PhotoUpload'
import TemplateSelector from '../components/TemplateSelector'
import BiodataPreview from '../components/BiodataPreview'
import PDFGenerator from '../components/PDFGenerator'
import '../styles/CreateBiodata.css'

function CreateBiodata() {
  const [step, setStep] = useState(1) // 1: Form, 2: Photo, 3: Template, 4: Preview
  const [formData, setFormData] = useState({})
  const [photo, setPhoto] = useState(null)
  const [selectedTemplate, setSelectedTemplate] = useState('classic')
  const [errors, setErrors] = useState({})

  const totalSteps = 4

  const handleFormChange = (data) => {
    setFormData(data)
  }

  const handlePhotoChange = (photoData) => {
    setPhoto(photoData)
  }

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template)
  }

  const validateStep = (currentStep) => {
    const newErrors = {}
    
    if (currentStep === 1) {
      if (!formData.fullName?.trim()) newErrors.fullName = 'Full name is required'
      if (!formData.mobile?.trim()) newErrors.mobile = 'Mobile number is required'
      if (formData.mobile && !/^[0-9]{10}$/.test(formData.mobile.replace(/[^0-9]/g, ''))) {
        newErrors.mobile = 'Enter a valid 10-digit mobile number'
      }
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Enter a valid email address'
      }
    } else if (currentStep === 2) {
      if (!photo) newErrors.photo = 'Photo is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleDownloadSuccess = () => {
    alert('Biodata downloaded successfully!')
  }

  return (
    <div className="create-biodata">
      <div className="create-container">
        {/* Progress Bar */}
        <div className="progress-section">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
          </div>
          <div className="step-indicators">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className={`step-indicator ${s <= step ? 'active' : ''} ${s === step ? 'current' : ''}`}>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <div className="step-labels">
            <span>Details</span>
            <span>Photo</span>
            <span>Template</span>
            <span>Download</span>
          </div>
        </div>

        <div className="create-content">
          {/* Main Content */}
          <div className="create-main">
            {step === 1 && (
              <div className="step-content">
                <h2>Step 1: Fill Your Details</h2>
                <p className="step-description">Enter your personal, education, and professional information</p>
                <BiodataForm onFormChange={handleFormChange} initialData={formData} />
                {errors.fullName && <p className="error-message">{errors.fullName}</p>}
                {errors.mobile && <p className="error-message">{errors.mobile}</p>}
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>
            )}

            {step === 2 && (
              <div className="step-content">
                <h2>Step 2: Upload Profile Photo</h2>
                <p className="step-description">Upload a professional profile photo for your biodata</p>
                <PhotoUpload onPhotoChange={handlePhotoChange} initialPhoto={photo} />
                {errors.photo && <p className="error-message">{errors.photo}</p>}
              </div>
            )}

            {step === 3 && (
              <div className="step-content">
                <h2>Step 3: Select Template</h2>
                <p className="step-description">Choose a beautiful template for your biodata</p>
                <TemplateSelector selectedTemplate={selectedTemplate} onTemplateChange={handleTemplateChange} />
              </div>
            )}

            {step === 4 && (
              <div className="step-content">
                <h2>Step 4: Download Your Biodata</h2>
                <p className="step-description">Your biodata is ready! Preview and download as PDF</p>
                <PDFGenerator data={formData} photo={photo} template={selectedTemplate} onDownload={handleDownloadSuccess} />
              </div>
            )}
          </div>

          {/* Preview Sidebar */}
          <div className="create-preview">
            {(formData.fullName || photo) && (
              <BiodataPreview data={formData} photo={photo} template={selectedTemplate} />
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="step-navigation">
          <button
            onClick={handlePrevStep}
            disabled={step === 1}
            className="btn btn-secondary"
          >
            ← Previous
          </button>
          
          <div className="nav-info">
            Step {step} of {totalSteps}
          </div>
          
          <button
            onClick={handleNextStep}
            disabled={step === totalSteps}
            className="btn btn-primary"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateBiodata
