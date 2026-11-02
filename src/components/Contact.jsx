import { useState } from 'react'
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react'
import emailjs from '@emailjs/browser'

const EMAIL = 'bikendragiri111@gmail.com'
// Replace with a real profile URL, or remove the LinkedIn item in the array below.
const LINKEDIN_URL = 'https://linkedin.com/in/your-profile-here'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [sending, setSending] = useState(false)
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable — the mailto link below still works.
    }
  }

  const sendMessage = async (event) => {
    event.preventDefault()
    if (sending) return

    const form = event.currentTarget
    if (!form.reportValidity()) return

    const formData = new FormData(form)
    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    if (!name || !email || !message) {
      setFormStatus({ type: 'error', message: 'Please complete all fields.' })
      return
    }

    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env
    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      const subject = `Portfolio message from ${name}`
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
      const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setFormStatus({
        type: 'info',
        message: 'Opening your email app with your message. If it does not open, use the Email me button below.',
      })
      window.location.href = mailto
      return
    }

    setSending(true)
    setFormStatus({ type: '', message: '' })
    try {
      await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        { from_name: name, from_email: email, reply_to: email, message },
        { publicKey: VITE_EMAILJS_PUBLIC_KEY }
      )
      form.reset()
      setFormStatus({ type: 'success', message: 'Your message was sent successfully.' })
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: error?.text || 'Your message could not be sent. Please try again or email me directly.',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact">
      <div className="container contact-inner">
        <span className="eyebrow">Contact</span>
        <h2 className="h2 contact-headline reveal-title" data-reveal>Have a good idea? Let's build it.</h2>
        <p className="lede contact-lede">
          I'm open to opportunities, collaborations, and freelance projects. Have something
          in mind? Let's talk.
        </p>

        <form className="contact-form" onSubmit={sendMessage} noValidate>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={120} />

          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />

          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="5" required maxLength={5000} />

          <div className="contact-form-footer">
            <p
              className={`contact-form-status${formStatus.type ? ` is-${formStatus.type}` : ''}`}
              role={formStatus.type === 'error' ? 'alert' : 'status'}
              aria-live="polite"
            >
              {formStatus.message}
            </p>
            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? 'Sending…' : 'Send a message'}
            </button>
          </div>
        </form>

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
