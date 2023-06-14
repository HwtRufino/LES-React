import React from "react";
import { Link } from "react-router-dom";
import './components/menu.css';

const Home = () => {
  return (
    <div className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <h3>Atividade 01 (Aula 08)</h3>
          <ul className="list-unstyled">
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/relogio">
                Data e Hora
              </Link>
            </li>
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/letreiro">
                Letreiro(FATEC)
              </Link>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <h3>Atividade 02(Aula 09)</h3>
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
          <h3>Atividade 03 (Aula 10)</h3>
          <ul className="list-unstyled">
            <li className="d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/gallery">Gallery</Link>
            </li>
            <li className="d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/todoList">TodoList</Link>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <h3>Atividade 04</h3>
          <ul className="list-unstyled">
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/toolbar">Toolbar</Link>
            </li>
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/galleryaula5">Gallery</Link>
            </li>
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/counter">Counter</Link>
            </li>
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/form">Form</Link>
            </li>
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/movingDot">MovingDot</Link>
            </li>
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/form2">Form2</Link>
            </li>
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/form3">Form3</Link>
            </li>
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/list1">List1</Link>
            </li>
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/list2">List2</Link>
            </li>
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/shapeEditor">ShapeEditor</Link>
            </li>
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/counterList">CounterList</Link>
            </li>
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/list3">List3</Link>
            </li>
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/list4">List4</Link>
            </li>
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/bucketList">BucketList</Link>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <h3>Atividade 05 (12 - React - Aula 06)</h3>
          <ul className="list-unstyled">
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/formQuiz">FormQuiz</Link>
            </li>
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/formTicket">FormTicket</Link>
            </li>
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/accordion">Accordion</Link>
            </li>
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/contactList">ContactList e Chat</Link>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <h3>Atividade 06</h3>
          <ul className="list-unstyled">
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/calculadora">Calculadora</Link>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <h3>Atividade 07</h3>
          <ul className="list-unstyled">
            <li className="col-6 d-inline mr-2">
              <Link className="btn btn-secondary m-1" to="/jogo-da-memória">Jogo da memória</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Home;
