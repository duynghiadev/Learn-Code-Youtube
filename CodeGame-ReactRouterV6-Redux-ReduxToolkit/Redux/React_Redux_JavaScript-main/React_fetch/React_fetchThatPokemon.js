import React, { useEffect, useState } from "react";
const API = "https://pokeapi.co/api/v2/pokemon";
export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch(API);
      const { results } = await res.json();
      console.log(results);
      setPokemon(results);
    };
    getPokemon();
  }, []);
  if (!pokemon) return <p>loading...</p>;
  return (
    <ul>
      {pokemon.map(({ name, url }) => (
        <li key={name}>
          <a href={url}>{name}</a>
        </li>
      ))}
    </ul>
  );
}
