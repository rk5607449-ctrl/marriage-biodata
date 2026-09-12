import '../styles/TemplateSelector.css'

function TemplateSelector({ selectedTemplate, onTemplateChange }) {
  const templates = [
    { id: 'classic', name: 'Classic', icon: '📋' },
    { id: 'elegant', name: 'Elegant', icon: '✨' },
    { id: 'modern', name: 'Modern', icon: '🎨' },
  ]

  return (
    <div className="template-selector">
      <h2>Select Template</h2>
      <p>Choose a professional template for your biodata</p>
      
      <div className="templates-grid">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`template-card ${selectedTemplate === template.id ? 'selected' : ''}`}
            onClick={() => onTemplateChange(template.id)}
          >
            <div className="template-icon">{template.icon}</div>
            <h3>{template.name}</h3>
            <input
              type="radio"
              name="template"
              value={template.id}
              checked={selectedTemplate === template.id}
              onChange={() => onTemplateChange(template.id)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TemplateSelector
