import React, { useState } from 'react';
import Banner from './Componentes/Banner/Banner';
import Formulario from './Componentes/Formulario';
import SobreMim from './Componentes/SobreMim';
import ListaSuspensa from './Componentes/ListaSuspensa';
import Projetos from './Componentes/Projeto';
import Tecnologias from './Componentes/Tecnologias';
const areasDeInteresse = ['Front-end', 'Back-end', 'Mobile'];

function App() {
  const [selecionado, setSelecionado] = useState(areasDeInteresse[0]);

  const times = [
    {
      nome: 'Front-end',
      corprima: '#82CFFA',
      corsegunda: '#E8F8FF',
    },
    {
      nome: 'Back-end',
      corprima: '#57C278',
      corsegunda: '#FDE7E8',
    },
    {
      nome: 'Mobile',
      corprima: '#FEBA05',
      corsegunda: '#FFF5D9',
    },
  ]

  return (
    <div className="App">
      <Banner />
      <Formulario  />
      <SobreMim />

      <div className="container">
        <h2 className="titulo">Minhas áreas de interesse</h2>
        <p className="legenda">* Lista demonstrativa com seleção ativa</p>
        <ListaSuspensa
          label="Escolha uma opção"
          itens={areasDeInteresse}
          valor={selecionado}
          aoAlterar={setSelecionado}
        />
        <Projetos />
        <Tecnologias />
       
      </div>

      <footer className="rodape">
        © 2025 - Desenvolvido por Cauê Souza
      </footer>
    </div>
  );
}

export default App;

