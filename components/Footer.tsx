'use client'

import { useState } from 'react'

const testimonials = [
  { name: 'Aisha Yusuf', role: 'Founder, CraftHub NG', avatar: 'AY', text: 'Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!', color: '#f7b718' },
  { name: 'John Davies', role: 'Marketing Manager, E-Commerce Emporium', avatar: 'JD', text: 'Tobams Group\'s Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!', color: '#b89b85' },
  { name: 'Chinonso Nwankwo', role: 'HR Director, FutureTech Solutions', avatar: 'CN', text: 'Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.', color: '#f7b718' },
  { name: 'Tolu Adebayo', role: 'Operations Lead, Bright Ideas', avatar: 'TA', text: 'The team brought clarity, energy, and real expertise to every part of our project. We could not have asked for a better partner.', color: '#c8a994' },
]

const columns = [
  { title: 'What We Do', links: ['Sustainability Services', 'Strategic Planning and Implementation', 'Tech Talent Solutions', 'Training and Development', 'IT Consulting Services', 'Social Impact', 'Talent Recruitment'] },
  { title: 'Company', links: ['About', 'Jobs', 'Projects', 'Our Founder', 'Business Model', 'The Team', 'Contact Us', 'Blog', 'FAQs', 'Testimonials'] },
  { title: 'Solution', links: ['Tobams Group Academy', 'Help a Tech Talent', 'Campus Ambassadors Program', 'Join Our Platform', 'Pricing', 'Book a Consultation', 'Join Our Slack Community'] },
]

export default function Footer() {
  const [active, setActive] = useState(0)
  return (
    <main className="site-shell">
      <section className="testimonials" aria-labelledby="testimonials-title">
        <h1 id="testimonials-title">Testimonials</h1>
        <div className="testimonial-viewport">
          <div className="testimonial-track" style={{ transform: `translateX(-${active * 247}px)` }}>
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <div className="person">
                  <span className="avatar" style={{ backgroundColor: item.color }}>{item.avatar}</span>
                  <span><strong>{item.name}</strong><small>{item.role}</small></span>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="carousel-controls" aria-label="Testimonial controls">
          <button aria-label="Previous testimonial" onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}>‹</button>
          <button aria-label="Next testimonial" onClick={() => setActive((active + 1) % testimonials.length)}>›</button>
        </div>
      </section>

      <section className="cta" aria-label="Contact Tobams Group">
        <div><span className="eyebrow">Ready to be a part of something extraordinary?</span><p>Let&apos;s work together to create a difference</p></div>
        <a href="#contact">Get In Touch</a>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-main">
          <div className="brand-block">
            <img className="footer-logo" src="/logo-bg.png" alt="Tobams Group" />
            <p>Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.</p>
            <div className="socials"><a href="#linkedin" aria-label="LinkedIn">in</a><a href="#instagram" aria-label="Instagram">◎</a><a href="#x" aria-label="X">X</a></div>
          </div>
          {columns.map((column) => <nav key={column.title} aria-label={column.title}><h2>{column.title}</h2>{column.links.map((link) => <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} key={link}>{link}</a>)}</nav>)}
        </div>
        <div className="office-panel">
          <div><h2>Registered Offices</h2><p><b>United Kingdom</b><br />07451196 (Registered by Company House)<br />Vine Cottages, 215 North Street, Romford, Essex, United<br />Kingdom, RM1 4QA</p></div>
          <div className="nigeria"><h2>&nbsp;</h2><p><b>Nigeria</b><br />RC 1048722 (Registered by the Corporate Affairs Commission)<br />4, Muaz Close, Angwar-Rimi</p></div>
          <div className="contact-info"><h2>Contact Information</h2><p>✉ &nbsp; theteam@tobamsgroup.com</p><p>⌕ &nbsp; +447866600748</p></div>
        </div>
        <div className="footer-bottom"><span>Copyright © Tobams Group, 2024. All rights reserved.</span><div><a href="#terms">Terms and Conditions</a><a href="#privacy">Privacy Policy</a><a href="#cookies">Cookies Policy</a></div></div>
      </footer>
    </main>
  )
}
