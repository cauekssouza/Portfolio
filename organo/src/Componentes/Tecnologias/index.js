import {
  SiHtml5,
  SiCss3,
  SiPhp,
  SiOpenjdk,
  SiPython,
  SiLinux,
  SiReact,
  SiTypescript,
  SiCplusplus,
  SiC,
  SiCashapp,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { VscGithubAlt } from "react-icons/vsc";

import "./Tecnologia.css"; 

const tecnologias = [
  { icon: <SiHtml5 className="icon text-orange-500" />, name: "HTML" },
  { icon: <SiCss3 className="icon text-blue-500" />, name: "CSS" },
  { icon: <TbBrandJavascript className="icon text-yellow-400" />, name: "JavaScript" },
  { icon: <SiPhp className="icon text-indigo-600" />, name: "PHP" },
  { icon: <GrMysql className="icon text-blue-800" />, name: "MySQL" },
  { icon: <SiOpenjdk className="icon text-red-500" />, name: "Java" },
  { icon: <SiPython className="icon text-yellow-600" />, name: "Python" },
  { icon: <VscGithubAlt className="icon text-gray-800" />, name: "Git" },
  { icon: <SiLinux className="icon text-black" />, name: "Linux" },
  { icon: <SiReact className="icon text-cyan-500"/>, name: "React"},
  { icon: <SiTypescript className="icon text-blue-500"/>, name: "TypeScript"},
];

const Tecnologias = () => {
  return (
    <div className="tecnologias-container">
      <h2 className="titulo">Tecnologias Aprendidas</h2>
      <div className="tecnologias-grid">
        {tecnologias.map((tec, index) => (
          <div className="tecnologia-card" key={index}>
            {tec.icon}
            <span>{tec.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tecnologias;
