import { useState } from "react";
import voltar from "../voltar";

let initialArtists = [
  { id: 0, name: "Marta Covin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function List2() {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <>
      <voltar /> <br />
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
