import React from 'react';

export default function Header() {
  return (
    <header className="cabeça">
      <a href="#" className="logo">Cauê<span></span></a>
      <nav className="navbar">
        <a href="#" className="active">Portfólio</a>
        <a href="#">Experiências</a>
        <a href="#">Contato</a>
        <a href="#">Projetos</a>
        <a href="#">Sobre Mim</a>
      </nav>
      <a href="#" className="contato">Contato</a>
    </header>
  );
}
