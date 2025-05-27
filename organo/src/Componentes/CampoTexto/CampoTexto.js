import './CampoTexto.css';

const CampoTexto = ({ label, placeholder, aoAlterado, obrigatorio = false }) => {
  const placeholderModificado = `${placeholder}...`;

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        required={obrigatorio}
        type="text"
        placeholder={placeholderModificado}
        onChange={aoDigitado}
      />
    </div>
  );
};

export default CampoTexto;
