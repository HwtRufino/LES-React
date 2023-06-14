import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BotaoVoltarInicio from '../voltar';
import '../menu.css';

const Letreiro = () => {
  const [texto, setTexto] = useState("");
  const [contador, setContador] = useState(0);
  const mensagem = "Venha estudar na FATEC!";

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (contador < mensagem.length) {
        setTexto((prevTexto) => prevTexto + mensagem[contador]);
        setContador((prevContador) => prevContador + 1);
      } else {
        clearInterval(intervalo);
        setTimeout(() => {
          setTexto("");
          setContador(0);
        }, 2000);
      }
    }, 200);
    return () => clearInterval(intervalo);
  }, [contador, mensagem]);

  return (
    <>
      <BotaoVoltarInicio />
      <div className="container text-center letreiro-container">
        <h1 className="letreiro-title">Letreiro</h1>
        <h1 className="letreiro-text">{texto}</h1>
      </div>
    </>
  );
};

export default Letreiro;