import React, { useState } from 'react';
import AddPokemon from './AddPokemon';
import PokemonList from './PokemonList';

const FavoritePage: React.FC = () => {
  const [pokemons, setPokemons] = useState<string[]>([]);

  const handleAddPokemon = (name: string) => {
    setPokemons([...pokemons, name]);
  };

  return (
    <div className='TitleSection'>
      <h1>Pokémon List</h1>
      <AddPokemon onAdd={handleAddPokemon} />
      <PokemonList pokemons={pokemons} />
    </div>
  );
};

export default FavoritePage;
