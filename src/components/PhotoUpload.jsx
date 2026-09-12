import { useState } from 'react'
import '../styles/PhotoUpload.css'

function PhotoUpload({ onPhotoChange, initialPhoto = null }) {
  const [photo, setPhoto] = useState(initialPhoto)
  const [error, setError] = useState('')

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    
    if (!file) return
    
    // Validate file type
    if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
      setError('Only JPG and PNG files are allowed')
      return
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB')
      return
    }
    
    const reader = new FileReader()
    reader.onload = (event) => {
      const photoData = event.target.result
      setPhoto(photoData)
      onPhotoChange(photoData)
      setError('')
    }
    reader.readAsDataURL(file)
  }

  const handleRemovePhoto = () => {
    setPhoto(null)
    onPhotoChange(null)
    setError('')
  }

  return (
    <div className="photo-upload">
      <h2>Upload Profile Photo</h2>
      
      <div className="photo-container">
        {photo ? (
          <div className="photo-preview">
            <img src={photo} alt="Profile" />
            <div className="photo-actions">
              <label className="btn-small">Change</label>
              <input
                type="file"
                accept="image/jpeg,image/png,image/jpg"
                onChange={handlePhotoChange}
                style={{ display: 'none' }}
              />
              <button type="button" onClick={handleRemovePhoto} className="btn-small btn-danger">
                Remove
              </button>
            </div>
          </div>
        ) : (
          <div className="photo-upload-area">
            <div className="upload-icon">📷</div>
            <p>Upload a professional photo</p>
            <p className="photo-hint">JPG or PNG, Max 5MB</p>
            <label className="btn-primary">
              Choose Photo
              <input
                type="file"
                accept="image/jpeg,image/png,image/jpg"
                onChange={handlePhotoChange}
                style={{ display: 'none' }}
              />
            </label>
          </div>
        )}
      </div>
      
      {error && <p className="error-text">{error}</p>}
    </div>
  )
}

export default PhotoUpload
