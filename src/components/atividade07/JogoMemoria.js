import React, { useState } from "react";
import voltar from "../voltar";
import ganhou from "./imagens/ganhou.webp";
import dog1 from "./imagens/dog1.png";
import dog2 from "./imagens/dog2.png";
import dog3 from "./imagens/dog3.png";
import dog4 from "./imagens/dog4.png";
import dog5 from "./imagens/dog5.png";
import dog6 from "./imagens/dog6.png";


function Embaralhar(animes) {
  let indiceAtual = animes.length,
    valorTemporario,
    indiceAleatorio;
  while (0 !== indiceAtual) {
    indiceAleatorio = Math.floor(Math.random() * indiceAtual);
    indiceAtual -= 1;
    valorTemporario = animes[indiceAtual];
    animes[indiceAtual] = animes[indiceAleatorio];
    animes[indiceAleatorio] = valorTemporario;
  }
  return animes;
}

function Card({ anime, funcao }) {
  return (
    <div className="col-2 d-flex justify-content-center">
      <a
        className="card"
        onClick={() => funcao(anime)}
        style={{
          width: "100px",
          height: "100px",
          fontSize: "24px",
          color: "black",
          backgroundImage: anime.virado ? `url(${anime.img})` : "",
          backgroundPosition: "center",
          backgroundColor: anime.acertou
            ? "#a6d3a6"
            : anime.virado
            ? "blue"
            : "#eb83f3",
          border: "1px solid black",
          margin: "10px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></a>
    </div>
  );
}


const ArrayAnimes = [
  { id: 0, nome: "dog1", img: dog1, acertou: false, virado: false },
  { id: 1, nome: "dog1", img: dog1, acertou: false, virado: false },
  { id: 2, nome: "dog2", img: dog2, acertou: false, virado: false },
  { id: 3, nome: "dog2", img: dog2, acertou: false, virado: false },
  { id: 4, nome: "dog3", img: dog3, acertou: false, virado: false },
  { id: 5, nome: "dog3", img: dog3, acertou: false, virado: false },
  { id: 6, nome: "dog4", img: dog4, acertou: false, virado: false },
  { id: 7, nome: "dog4", img: dog4, acertou: false, virado: false },
  { id: 8, nome: "dog5", img: dog5, acertou: false, virado: false },
  { id: 9, nome: "dog5", img: dog5, acertou: false, virado: false },
  { id: 10, nome: "dog6", img: dog6, acertou: false, virado: false },
  { id: 11, nome: "dog6", img: dog6, acertou: false, virado: false },
];

export default function JogoMemoria() {
  const [acertos, setAcertos] = useState(0);
  const [animes, setAnimes] = useState(Embaralhar(ArrayAnimes));
  const [anterior, setAnterior] = useState(null);

  function handleClick(anime) {
    if (!anime.virado) {
      setAnimes(
        animes.map((cadaAnime) => {
          if (cadaAnime.id === anime.id) {
            cadaAnime.virado = !cadaAnime.virado;
          }
          return cadaAnime;
        })
      );
      setAnterior(anime);

      if (anterior) {
        if (anterior.nome === anime.nome && anterior.id !== anime.id) {
          setAcertos(acertos + 1);
          setAnimes(
            animes.map((cadaAnime) => {
              if (cadaAnime.nome === anime.nome) {
                cadaAnime.acertou = true;
              }
              return cadaAnime;
            })
          );
        } else {
          setTimeout(() => {
            setAnimes(
              animes.map((cadaAnime) => {
                if (cadaAnime.id === anime.id || cadaAnime.id === anterior.id) {
                  cadaAnime.virado = false;
                }
                return cadaAnime;
              })
            );
          }, 1000);
        }
        setAnterior(null);
      }
    }
  }

  return (
    <>
      <voltar /> <br />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Jogo da Memória</h1>
          </div>
          <div className="col-12 text-center">
            {acertos === 6 && (
              <>
                <h2>Parabéns, você ganhou!!!</h2>
                <img src={ganhou} style={{ width: "500px" }} alt="" />
              </>
            )}
          </div>

        </div>
        <div className="row">
          {animes.map((anime) => (
            <Card anime={anime} funcao={handleClick} />
          ))}
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h1>Acertos: {acertos}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
