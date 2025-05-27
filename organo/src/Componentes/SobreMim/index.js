import { FaWhatsappSquare, FaGithubSquare } from "react-icons/fa";
import './SobreMim.css';


const SobreMim = () => {
  return (
    <section className="bg-white p-6 max-w-4xl mx-auto rounded-2xl shadow-lg flex flex-col gap-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Sobre Mim</h2>

      <p className="text-indigo-600 text-lg text-center">Estudante de Engenharia de Software</p>

      <p className="text-gray-700">
        Sou um estudante dedicado e apaixonado por tecnologia, atualmente cursando o 5º período de Engenharia de Software na Pontifícia Universidade Católica do Paraná (PUCPR). 
        Tenho um forte interesse em desenvolvimento de software e segurança da informação, e estou em busca de oportunidades de estágio que me permitam aplicar e expandir 
        meus conhecimentos acadêmicos em um ambiente prático e colaborativo.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-gray-800">Formação:</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Graduação: Engenharia de Software - PUCPR (Em andamento)</li>
          <li>Previsão de Conclusão: Dezembro de 2026</li>
        </ul>
      </div>

      <div className="flex justify-center gap-6 mt-4">
        {/* Atualize com seus dados reais */}
        <a
          href="https://wa.me/41992210636"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 text-3xl hover:scale-110 transition-transform"
        >
          <FaWhatsappSquare /> 
        </a>
        <a
          href="https://github.com/cauekssouza"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 text-3xl hover:scale-110 transition-transform"
        >
          <FaGithubSquare />
        </a>
      </div>
    </section>
  );
};

export default SobreMim;

