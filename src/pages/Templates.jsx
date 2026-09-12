import '../styles/Templates.css'

function Templates() {
  const templates = [
    {
      id: 'classic',
      name: 'Classic',
      icon: '📋',
      description: 'Simple and elegant design with clean layout',
      features: ['Clean layout', 'Easy to read', 'Professional']
    },
    {
      id: 'elegant',
      name: 'Elegant',
      icon: '✨',
      description: 'Premium sophisticated look with decorative elements',
      features: ['Sophisticated', 'Decorative', 'Premium']
    },
    {
      id: 'modern',
      name: 'Modern',
      icon: '🎨',
      description: 'Contemporary and stylish design with modern aesthetics',
      features: ['Contemporary', 'Stylish', 'Modern']
    },
  ]

  return (
    <div className="templates-page">
      <div className="container">
        <h1>Marriage Biodata Templates</h1>
        <p className="templates-description">Choose from our professionally designed templates</p>
        
        <div className="templates-grid">
          {templates.map((template) => (
            <div key={template.id} className="template-card">
              <div className="template-card-icon">{template.icon}</div>
              <h2>{template.name}</h2>
              <p className="template-card-description">{template.description}</p>
              <ul className="template-features">
                {template.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
              <a href="/create" className="btn btn-primary">Use This Template</a>
            </div>
          ))}
        </div>

        <section className="template-details">
          <h2>Template Details</h2>
          
          <div className="detail-section">
            <h3>📋 Classic Template</h3>
            <p>Our classic template is designed for users who prefer a traditional and straightforward biodata layout. It features:</p>
            <ul>
              <li>Clear section headers</li>
              <li>Organized information flow</li>
              <li>Professional typography</li>
              <li>Photo placeholder at top</li>
              <li>Perfect for all demographics</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>✨ Elegant Template</h3>
            <p>The elegant template offers a more premium appearance with sophisticated design elements:</p>
            <ul>
              <li>Decorative borders and accents</li>
              <li>Refined typography</li>
              <li>Color-coordinated sections</li>
              <li>Professional photo frame</li>
              <li>Ideal for formal occasions</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>🎨 Modern Template</h3>
            <p>The modern template showcases contemporary design with stylish presentation:</p>
            <ul>
              <li>Modern layout design</li>
              <li>Contemporary color scheme</li>
              <li>Dynamic typography</li>
              <li>Stylish photo positioning</li>
              <li>Perfect for tech-savvy users</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Templates
