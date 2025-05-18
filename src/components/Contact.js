import React from 'react';

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2 className="heading">Contato</h2>
        <form id="contact-form">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit" className="btn-2">Enviar</button>
        </form>

        <div className="social-icons">
          <a href="https://wa.me/+5541992210636" target="_blank" title="WhatsApp" rel="noopener noreferrer">
            <i className="bx bxl-whatsapp" style={{ color: '#00ff2a' }}></i>
          </a>
          <a href="https://github.com/cauekssouza" target="_blank" title="GitHub" rel="noopener noreferrer">
            <i className="bx bxl-github" style={{ color: '#850fe6' }}></i>
          </a>
        </div>
      </div>
    </section>
  );
}
