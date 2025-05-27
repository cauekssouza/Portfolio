import './ListaSuspensa.css';

const ListaSuspensa = ({ label, itens, valor, aoAlterar, required }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>
      <select
        required={required}
        className="w-full p-2 border border-gray-300 rounded-md"
        value={valor}
        onChange={e => aoAlterar(e.target.value)}
      >
        <option value="" disabled>Selecione uma opção</option>
        {itens.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
