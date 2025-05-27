import './projeto.css';


const projetos = [
  {
    title: "Flavour Hunter",
    image: "/Imagens/Flavour.png",
    link: "https://github.com/cauekssouza/Flavor_Stalker.git"
  },
  {
    title: "Farmicon",
    image: "./Imagens/Farmicon.png",
    link: "https://github.com/cauekssouza/Farmicon.git"
  },
  {
    title: "Gerenciador de Tarefas",
    image: "./Imagens/Gerenciador.png",
    link: "https://github.com/cauekssouza/Gerenciador-deTarefas.git"
  }
];

const Projetos = () => {
  return (
    <section className="projetos-section">
      <h2 className="projetos-title">Meus Projetos</h2>
      <div className="projetos-grid">
        {projetos.map((project, index) => (
          <div key={index} className="projeto-card">
            <img src={project.image} alt={project.title} className="projeto-img" />
            <div className="projeto-info">
              <h3 className="projeto-nome">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projeto-link"
              >
                Ver projeto →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
