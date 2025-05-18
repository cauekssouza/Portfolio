import React from 'react';

export default function About({ logo }) {
  return (
    <section className="about">
      <div className="about-img">
        <img src={logo} alt="Logo Cauê" />
      </div>
      <div className="about-content">
        <h2 className="heading">Sobre <span></span>Mim</h2>
        <h3>Estudante de <span>Engenharia de Software</span></h3>
        <p>
          Sou um estudante dedicado e apaixonado por tecnologia, atualmente cursando o 5º período de Engenharia de Software na Pontifícia Universidade Católica do Paraná (PUCPR). Tenho um forte interesse em desenvolvimento de software e segurança da informação, e estou em busca de oportunidades de estágio que me permitam aplicar e expandir meus conhecimentos acadêmicos em um ambiente prático e colaborativo.
        </p>
        <p>Formação:</p>
        <ul>
          <li>Graduação: Engenharia de Software - PUCPR (Em andamento)</li>
          <li>Previsão de Conclusão: Dezembro de 2026</li>
        </ul>
        <a href="#" className="btn-2">Experiências</a>
      </div>
    </section>
  );
}
