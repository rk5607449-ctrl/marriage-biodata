import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Create Your Marriage Biodata in Minutes</h1>
          <p>Create a beautiful, professional marriage biodata online and download it as a PDF.</p>
          <div className="hero-buttons">
            <Link to="/create" className="btn btn-large btn-primary">
              Create Biodata
            </Link>
            <Link to="/templates" className="btn btn-large btn-secondary">
              View Templates
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Fill Form</h3>
              <p>Enter your personal, education, and professional details</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Upload Photo</h3>
              <p>Add your professional profile photo</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Select Template</h3>
              <p>Choose from beautiful professional templates</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Preview & Download</h3>
              <p>See your biodata and download as PDF</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📄</div>
              <h3>Professional Templates</h3>
              <p>Choose from 3 beautifully designed templates</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📸</div>
              <h3>Photo Upload</h3>
              <p>Easy photo upload with instant preview</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👁️</div>
              <h3>Live Preview</h3>
              <p>See your biodata update in real-time</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant PDF</h3>
              <p>Download professional PDF in seconds</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Works perfectly on all devices</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure & Private</h3>
              <p>Your data is safe and never shared</p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section className="templates-section">
        <div className="container">
          <h2>Our Templates</h2>
          <div className="template-preview-grid">
            <div className="template-preview-card">
              <div className="template-preview-icon">📋</div>
              <h3>Classic</h3>
              <p>Simple and elegant design</p>
            </div>
            <div className="template-preview-card">
              <div className="template-preview-icon">✨</div>
              <h3>Elegant</h3>
              <p>Premium sophisticated look</p>
            </div>
            <div className="template-preview-card">
              <div className="template-preview-icon">🎨</div>
              <h3>Modern</h3>
              <p>Contemporary and stylish</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-home">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-card">
              <h4>Is it completely free?</h4>
              <p>Yes! Creating and downloading your first biodata is completely free. Premium features are optional.</p>
            </div>
            <div className="faq-card">
              <h4>What file formats are accepted?</h4>
              <p>We accept JPG and PNG photo files, maximum 5MB size.</p>
            </div>
            <div className="faq-card">
              <h4>Can I edit my biodata?</h4>
              <p>Yes, you can edit and regenerate your biodata as many times as you want.</p>
            </div>
            <div className="faq-card">
              <h4>Is my data safe?</h4>
              <p>Your privacy is our priority. Your data is never shared or sold to third parties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Create Your Perfect Biodata?</h2>
          <p>Start now and get your professional biodata in minutes</p>
          <Link to="/create" className="btn btn-large btn-primary">
            Create Your Biodata
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
