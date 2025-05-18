import React from 'react';

export default function Projects({ flavourImg, farmiconImg }) {
  return (
    <section className="projects">
      <div className="project-content">
        <h2 className="heading">Projetos</h2>
        <div className="project-item">
          <h3>Flavour Hunter</h3>
          <p>Descrição: Desenvolvimento de uma aplicação web para gerenciamento de restaurante com html, css, javascript, php, frameworks e SQL</p>
          <a href={flavourImg} className="btn-2" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
        </div>
        <div className="project-item">
          <h3>Farmicon</h3>
          <p>Descrição: Criação de um aplicativo para localizar o preço mais adequado em uma Farmacia em Java</p>
          <a href={farmiconImg} className="btn-2" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
        </div>
      </div>
    </section>
  );
}
