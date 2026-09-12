import '../styles/BiodataPreview.css'

function BiodataPreview({ data, photo, template }) {
  const renderTemplate = () => {
    const commonContent = (
      <>
        {photo && <div className="preview-photo"><img src={photo} alt="Profile" /></div>}
        
        {data.fullName && (
          <div className="preview-section">
            <h2 className="preview-name">{data.fullName}</h2>
            {data.gender && <p><strong>Gender:</strong> {data.gender}</p>}
            {data.dob && <p><strong>Date of Birth:</strong> {data.dob}</p>}
            {data.height && <p><strong>Height:</strong> {data.height}</p>}
            {data.weight && <p><strong>Weight:</strong> {data.weight} kg</p>}
            {data.complexion && <p><strong>Complexion:</strong> {data.complexion}</p>}
            {data.religion && <p><strong>Religion:</strong> {data.religion}</p>}
            {data.caste && <p><strong>Caste:</strong> {data.caste}</p>}
            {data.motherTongue && <p><strong>Mother Tongue:</strong> {data.motherTongue}</p>}
            {data.maritalStatus && <p><strong>Marital Status:</strong> {data.maritalStatus}</p>}
          </div>
        )}
        
        {(data.mobile || data.email || data.city || data.state) && (
          <div className="preview-section">
            <h3>Contact Details</h3>
            {data.mobile && <p><strong>Mobile:</strong> {data.mobile}</p>}
            {data.email && <p><strong>Email:</strong> {data.email}</p>}
            {data.city && <p><strong>City:</strong> {data.city}</p>}
            {data.state && <p><strong>State:</strong> {data.state}</p>}
          </div>
        )}
        
        {(data.education || data.college) && (
          <div className="preview-section">
            <h3>Education</h3>
            {data.education && <p><strong>Qualification:</strong> {data.education}</p>}
            {data.college && <p><strong>College/University:</strong> {data.college}</p>}
          </div>
        )}
        
        {(data.occupation || data.company || data.income) && (
          <div className="preview-section">
            <h3>Profession</h3>
            {data.occupation && <p><strong>Occupation:</strong> {data.occupation}</p>}
            {data.company && <p><strong>Company:</strong> {data.company}</p>}
            {data.jobLocation && <p><strong>Location:</strong> {data.jobLocation}</p>}
            {data.income && <p><strong>Annual Income:</strong> {data.income}</p>}
          </div>
        )}
        
        {(data.fatherName || data.motherName || data.brothers || data.sisters) && (
          <div className="preview-section">
            <h3>Family</h3>
            {data.fatherName && <p><strong>Father:</strong> {data.fatherName}</p>}
            {data.fatherOccupation && <p><strong>Father's Occupation:</strong> {data.fatherOccupation}</p>}
            {data.motherName && <p><strong>Mother:</strong> {data.motherName}</p>}
            {data.motherOccupation && <p><strong>Mother's Occupation:</strong> {data.motherOccupation}</p>}
            {data.brothers && <p><strong>Brothers:</strong> {data.brothers}</p>}
            {data.sisters && <p><strong>Sisters:</strong> {data.sisters}</p>}
            {data.familyType && <p><strong>Family Type:</strong> {data.familyType}</p>}
            {data.familyLocation && <p><strong>Location:</strong> {data.familyLocation}</p>}
          </div>
        )}
        
        {data.aboutMe && (
          <div className="preview-section">
            <h3>About Me</h3>
            <p>{data.aboutMe}</p>
          </div>
        )}
        
        {data.hobbies && (
          <div className="preview-section">
            <h3>Hobbies & Interests</h3>
            <p>{data.hobbies}</p>
          </div>
        )}
        
        {data.partnerPreferences && (
          <div className="preview-section">
            <h3>Partner Preferences</h3>
            <p>{data.partnerPreferences}</p>
          </div>
        )}
      </>
    )

    if (template === 'elegant') {
      return (
        <div className="preview-content elegant">
          <div className="elegant-header">
            <h1>Marriage Biodata</h1>
          </div>
          {commonContent}
          <div className="elegant-footer">
            <p>Created with Marriage Biodata Maker</p>
          </div>
        </div>
      )
    } else if (template === 'modern') {
      return (
        <div className="preview-content modern">
          <div className="modern-header">
            <h1>{data.fullName || 'Your Name'}</h1>
            <p>{data.occupation || 'Profession'}</p>
          </div>
          <div className="modern-body">
            {commonContent}
          </div>
        </div>
      )
    } else {
      // Classic
      return (
        <div className="preview-content classic">
          <h1>Marriage Biodata</h1>
          {commonContent}
        </div>
      )
    }
  }

  return (
    <div className="biodata-preview">
      <h2>Live Preview ({template})</h2>
      <div className="preview-container">
        {renderTemplate()}
      </div>
    </div>
  )
}

export default BiodataPreview
