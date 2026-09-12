import { useState } from 'react'
import '../styles/FAQ.css'

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const faqs = [
    {
      question: 'Is creating a biodata completely free?',
      answer: 'Yes! Creating and downloading your first biodata is completely free. We do not charge for the basic features.'
    },
    {
      question: 'What file formats are accepted for photos?',
      answer: 'We accept JPG and PNG photo files. The maximum file size is 5MB. Please use a professional passport-size or headshot photo.'
    },
    {
      question: 'Can I edit my biodata after creating it?',
      answer: 'Yes! You can edit any field in your biodata at any time. Simply go back to the creation page, update your information, and regenerate the PDF.'
    },
    {
      question: 'Is my personal information safe and secure?',
      answer: 'Your privacy is our top priority. All data is stored securely and is never shared with third parties. We follow strict data protection policies.'
    },
    {
      question: 'Can I use the same template for multiple biodatas?',
      answer: 'Absolutely! Our templates are designed to work with any information. You can create as many biodatas as you need.'
    },
    {
      question: 'What if I make a mistake in my biodata?',
      answer: 'No problem! You can edit your biodata anytime. Simply update the information and download a new PDF.'
    },
    {
      question: 'How long does it take to create a biodata?',
      answer: 'Typically, it takes 5-10 minutes to fill in all the details, upload a photo, and download your biodata PDF.'
    },
    {
      question: 'Can I share my biodata with others?',
      answer: 'Yes! Once you download the PDF, you can easily share it via email, WhatsApp, or any other medium.'
    },
    {
      question: 'Do you offer premium features?',
      answer: 'Currently, all features are free. We may introduce optional premium features in the future for additional customization.'
    },
    {
      question: 'What should I include in the "About Me" section?',
      answer: 'Write about your personality, values, interests, and what makes you special. Keep it between 100-200 words and be honest and genuine.'
    },
  ]

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="faq-page">
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <p className="faq-subtitle">Find answers to common questions about creating your marriage biodata</p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`}>
              <button
                className="faq-question"
                onClick={() => toggleExpand(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-toggle">{expandedIndex === index ? '−' : '+'}</span>
              </button>
              {expandedIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <section className="faq-contact">
          <h2>Still Have Questions?</h2>
          <p>We're here to help! Contact us for any additional support.</p>
          <div className="contact-methods">
            <div className="contact-method">
              <h3>📧 Email</h3>
              <p>support@biodata.com</p>
            </div>
            <div className="contact-method">
              <h3>💬 WhatsApp</h3>
              <p>+91 9876543210</p>
            </div>
            <div className="contact-method">
              <h3>🕐 Hours</h3>
              <p>Mon-Fri: 9AM - 6PM</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FAQ
