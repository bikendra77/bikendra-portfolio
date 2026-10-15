import { useState } from 'react'
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react'

const EMAIL = 'bikendragiri111@gmail.com'
// Replace with a real profile URL, or remove the LinkedIn item in the array below.
const LINKEDIN_URL = 'https://linkedin.com/in/your-profile-here'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable — the mailto link below still works.
    }
  }

  return (
    <section id="contact">
      <div className="container contact-inner">
        <span className="eyebrow">Contact</span>
        <h2 className="h2 contact-headline">Have a good idea? Let's build it.</h2>
        <p className="lede contact-lede">
          I'm open to opportunities, collaborations, and freelance projects. Have something
          in mind? Let's talk.
        </p>

        <div className="contact-actions">
          <a href={`mailto:${EMAIL}`} className="btn btn-primary">
            <Mail size={16} />
            Email me
          </a>
          <button type="button" onClick={copyEmail} className="btn">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied' : EMAIL}
          </button>
        </div>

        <div className="contact-links">
          <a href="https://github.com/bikendra77" target="_blank" rel="noopener noreferrer" className="contact-link">
            <Github size={17} />
            GitHub
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="contact-link">
            <Linkedin size={17} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
