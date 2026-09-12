import html2pdf from 'html2pdf.js'
import '../styles/PDFGenerator.css'

function PDFGenerator({ data, photo, template, onDownload }) {
  const generatePDF = () => {
    const element = document.getElementById('pdf-content')
    if (!element) return

    const opt = {
      margin: 10,
      filename: `${data.fullName || 'biodata'}-${template}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    }

    html2pdf().set(opt).from(element).save()
    if (onDownload) onDownload()
  }

  const renderTemplate = () => {
    const commonContent = (
      <>
        {photo && <div className="pdf-photo"><img src={photo} alt="Profile" /></div>}
        
        {data.fullName && (
          <div className="pdf-section">
            <h2 className="pdf-name">{data.fullName}</h2>
            <div className="pdf-grid">
              {data.gender && <div><strong>Gender:</strong> {data.gender}</div>}
              {data.dob && <div><strong>DOB:</strong> {data.dob}</div>}
              {data.height && <div><strong>Height:</strong> {data.height}</div>}
              {data.weight && <div><strong>Weight:</strong> {data.weight} kg</div>}
              {data.complexion && <div><strong>Complexion:</strong> {data.complexion}</div>}
              {data.religion && <div><strong>Religion:</strong> {data.religion}</div>}
              {data.caste && <div><strong>Caste:</strong> {data.caste}</div>}
              {data.motherTongue && <div><strong>Mother Tongue:</strong> {data.motherTongue}</div>}
              {data.maritalStatus && <div><strong>Marital Status:</strong> {data.maritalStatus}</div>}
            </div>
          </div>
        )}
        
        {(data.mobile || data.email || data.city) && (
          <div className="pdf-section">
            <h3>Contact Details</h3>
            {data.mobile && <p><strong>Mobile:</strong> {data.mobile}</p>}
            {data.email && <p><strong>Email:</strong> {data.email}</p>}
            {data.city && <p><strong>City:</strong> {data.city}, {data.state}</p>}
          </div>
        )}
        
        {(data.education || data.college) && (
          <div className="pdf-section">
            <h3>Education</h3>
            {data.education && <p><strong>Qualification:</strong> {data.education}</p>}
            {data.college && <p><strong>College/University:</strong> {data.college}</p>}
          </div>
        )}
        
        {(data.occupation || data.company) && (
          <div className="pdf-section">
            <h3>Profession</h3>
            {data.occupation && <p><strong>Occupation:</strong> {data.occupation}</p>}
            {data.company && <p><strong>Company:</strong> {data.company}</p>}
            {data.jobLocation && <p><strong>Location:</strong> {data.jobLocation}</p>}
            {data.income && <p><strong>Income:</strong> {data.income}</p>}
          </div>
        )}
        
        {(data.fatherName || data.motherName) && (
          <div className="pdf-section">
            <h3>Family</h3>
            {data.fatherName && <p><strong>Father:</strong> {data.fatherName} ({data.fatherOccupation})</p>}
            {data.motherName && <p><strong>Mother:</strong> {data.motherName} ({data.motherOccupation})</p>}
            {(data.brothers || data.sisters) && (
              <p><strong>Siblings:</strong> Brothers: {data.brothers || 0}, Sisters: {data.sisters || 0}</p>
            )}
            {data.familyType && <p><strong>Family Type:</strong> {data.familyType}</p>}
            {data.familyLocation && <p><strong>Location:</strong> {data.familyLocation}</p>}
          </div>
        )}
        
        {data.aboutMe && (
          <div className="pdf-section">
            <h3>About Me</h3>
            <p>{data.aboutMe}</p>
          </div>
        )}
        
        {data.hobbies && (
          <div className="pdf-section">
            <h3>Hobbies & Interests</h3>
            <p>{data.hobbies}</p>
          </div>
        )}
        
        {data.partnerPreferences && (
          <div className="pdf-section">
            <h3>Partner Preferences</h3>
            <p>{data.partnerPreferences}</p>
          </div>
        )}
      </>
    )

    if (template === 'elegant') {
      return (
        <div className="pdf-elegant">
          <div className="pdf-elegant-header">✨ Marriage Biodata ✨</div>
          {commonContent}
          <div className="pdf-elegant-footer">Created with Marriage Biodata Maker | www.biodata.com</div>
        </div>
      )
    } else if (template === 'modern') {
      return (
        <div className="pdf-modern">
          <div className="pdf-modern-header">
            <h1>{data.fullName || 'Name'}</h1>
            <p>{data.occupation || 'Profession'}</p>
          </div>
          {commonContent}
        </div>
      )
    } else {
      return (
        <div className="pdf-classic">
          <h1>Marriage Biodata</h1>
          {commonContent}
        </div>
      )
    }
  }

  return (
    <div className="pdf-generator">
      <div id="pdf-content" className="pdf-content">
        {renderTemplate()}
      </div>
      
      <div className="pdf-actions">
        <button onClick={generatePDF} className="btn-large btn-primary">
          📥 Download PDF
        </button>
      </div>
    </div>
  )
}

export default PDFGenerator
