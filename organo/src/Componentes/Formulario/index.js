import React, { useState } from 'react';
import CampoTexto from '../CampoTexto/CampoTexto';
import './Formulario.css';
import Botao from '../Botao';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const aoEnviar = (evento) => {
    evento.preventDefault(); 
    console.log('Enviando formulário com dados:', { nome, email, telefone });
  };

  return (
    <section className='formulario'>
      <form onSubmit={aoEnviar}>
        <h2>Preencha os campos caso queira conversar comigo</h2>
        
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />

        <CampoTexto
          obrigatorio={true}
          label="E-mail"
          placeholder="Digite seu E-mail"
          valor={email}
          aoAlterado={valor => setEmail(valor)}
        />

        <CampoTexto
          obrigatorio={true}
          label="Telefone"
          placeholder="Telefone"
          valor={telefone}
          aoAlterado={valor => setTelefone(valor)}
        />
        

        <Botao>
          Enviar
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
