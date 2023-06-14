import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BotaoVoltarInicio from '../voltar';
import '../menu.css';

function Relogio() {
  const [dataHoraCompleta, setDataHoraCompleta] = useState("");

  useEffect(() => {
    const intervalo = setInterval(() => {
      const agora = new Date();
      const dia = agora.getDate();
      const mes = agora.getMonth() + 1;
      const ano = agora.getFullYear();
      const hora = agora.getHours();
      const minuto = agora.getMinutes();
      const segundo = agora.getSeconds();

      const diaFormatado = dia < 10 ? `0${dia}` : dia;
      const mesFormatado = mes < 10 ? `0${mes}` : mes;
      const horaFormatada = hora < 10 ? `0${hora}` : hora;
      const minutoFormatado = minuto < 10 ? `0${minuto}` : minuto;
      const segundoFormatado = segundo < 10 ? `0${segundo}` : segundo;

      const dataHoraCompletaFormatada = `${diaFormatado}/${mesFormatado}/${ano} ${horaFormatada}:${minutoFormatado}:${segundoFormatado}`;
      setDataHoraCompleta(dataHoraCompletaFormatada);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return <h1 className="relogio">{dataHoraCompleta}</h1>;
}

export default Relogio;