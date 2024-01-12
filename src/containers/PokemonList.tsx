import React from 'react';

interface PokemonListProps {
  pokemons: string[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <ul>
      {pokemons.map((pokemon, index) => (
        <li key={index}>{pokemon}</li>
      ))}
    </ul>
  );
};

export default PokemonList;
