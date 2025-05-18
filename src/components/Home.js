import React from 'react';

export default function Home({ logo }) {
  return (
    <section className="home">
      <div className="home_cont">
        <h3>Oi</h3>
        <h1>Eu sou <span>Cauê<br /></span>Estudante de Engenharia de Software</h1>
        <p>Atualmente estou procurando estágio, especificamente para desenvolvedor backend ou frontend, para criar programas inovadores.</p>
        <div className="btn-box">
          <button className="btn-1">Sobre Mim</button>
          <button className="btn-2">Experiências</button>
        </div>
      </div>
      <div className="img-box">
        <img src={logo} alt="Logo Cauê" />
      </div>
    </section>
  );
}
