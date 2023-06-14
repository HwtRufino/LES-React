import React from "react";
import { Link } from "react-router-dom";
import './components/menu.css'

const Home = () => {
  return (
    <div className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          Atividade 01 (Aula 08)
          <ul className="row list-unstyled">
            <li className="col-6">
              <Link className="btn btn-secondary m-1" to="/relogio">
                Data e Hora
              </Link>
            </li>
            <li className="col-6">
              <Link className="btn btn-secondary m-1" to="/letreiro">
                Letreiro(FATEC)
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          Atividade 02(Aula 09)
          <ul className="row list-unstyled">
            <li className="col-6">
              <Link className="btn btn-secondary m-1" to="/Contador">
                Contador De Pessoas
              </Link>
            </li>
            {/* Adicione aqui outras sub-atividades da Atividade 02 */}
          </ul>
        </li>
        <li className="menu-item">
          Atividade 03 (Aula 10)
          <ul className="row list-unstyled">
            <li className="col-6">
              <Link className="btn btn-secondary m-1" to="/src/components/atividade03/App.js">
                Atividade 03
              </Link>
            </li>
            {/* Adicione aqui outras sub-atividades da Atividade 03 */}
          </ul>
        </li>
        <li className="menu-item">
          Atividade 04 (Aula 11)
          <ul className="row list-unstyled">
            <li className="col-6">
              <Link className="btn btn-secondary m-1" to="/atividade04">
                Atividade 04
              </Link>
            </li>
            {/* Adicione aqui outras sub-atividades da Atividade 04 */}
          </ul>
        </li>
        <li className="menu-item">
          Atividade 05 (Aula 12)
          <ul className="row list-unstyled">
            <li className="col-6">
              <Link className="btn btn-secondary m-1" to="/atividade05">
                Atividade 05
              </Link>
            </li>
            {/* Adicione aqui outras sub-atividades da Atividade 05 */}
          </ul>
        </li>
        <li className="menu-item">
          Atividade 06 (Aula 13)
          <ul className="row list-unstyled">
            <li className="col-6">
              <Link className="btn btn-secondary m-1" to="/atividade06">
                Atividade 06
              </Link>
            </li>
            {/* Adicione aqui outras sub-atividades da Atividade 06 */}
          </ul>
        </li>
        <li className="menu-item">
          Atividade 07 (Aula 14)
          <ul className="row list-unstyled">
            <li className="col-6">
              <Link className="btn btn-secondary m-1" to="/atividade07">
                Atividade 07
              </Link>
            </li>
            {/* Adicione aqui outras sub-atividades da Atividade 07 */}
          </ul>
        </li>
        <li className="menu-item">
          Atividade 08
          <ul className="row list-unstyled">
            <li className="col-6">
              <Link className="btn btn-secondary m-1" to="/atividade08">
                Atividade 08
              </Link>
            </li>
            {/* Adicione aqui outras sub-atividades da Atividade 08 */}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Home;